import React, { useContext, useEffect, useState } from 'react';
import pt from 'date-fns/locale/pt';
import { parseISO, formatDistanceToNow } from 'date-fns';
import { AuthContext } from '../../hooks/auth';
import { Card } from '../../components/Card';
import Button from '../../components/Button';
import { Content, NotificationList, Notification } from './styles';
import { api } from '../../services/api';
import Layout from '../../components/Layout';

interface INotifications {
  id: string;
  content: string;
  recipient_id: string;
  created_at: string;
  read: boolean;
  timeDistance: string;
}

export default function ListNotifications() {
  const [notifications, setNotifications] = useState<INotifications[]>([]);
  const { user } = useContext(AuthContext);
  console.log(user);
  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get<INotifications[]>(
        `/notifications/${user?.id}`,
      );

      const data = response.data.map(notification => ({
        ...notification,
        timeDistance: formatDistanceToNow(parseISO(notification.created_at), {
          addSuffix: true,
          locale: pt,
        }),
      }));
      setNotifications(data);
    }

    loadNotifications();
  }, [user?.id]);

  async function handleMarkAsRead(id: string) {
    await api.put('notifications/read', { id });

    setNotifications(
      notifications.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification,
      ),
    );
  }

  return (
    <Layout>
      <Content>
        <Card title="Lista de Notificações">
          <NotificationList>
            {notifications
              .sort((x, y) => {
                return (
                  new Date(y.created_at).getTime() -
                  new Date(x.created_at).getTime()
                );
              })
              .map(notification => {
                return (
                  <Notification
                    unread={!notification.read}
                    key={notification.id}
                  >
                    <p>{notification.content}</p>
                    <time>{notification.timeDistance}</time>
                    {!notification.read && (
                      <Button
                        type="button"
                        onClick={() => handleMarkAsRead(notification.id)}
                      >
                        MARCAR COMO LIDA
                      </Button>
                    )}
                  </Notification>
                );
              })}
          </NotificationList>
        </Card>
      </Content>
    </Layout>
  );
}
