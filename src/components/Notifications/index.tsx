import React, { memo, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import pt from 'date-fns/locale/pt';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { api } from '../../services/api';
import { AuthContext } from '../../hooks/auth';

import {
  Container,
  IconNotifications,
  NotificationList,
  Notification,
  BadgeContainer,
  NotificationListHeader,
  NotificationListFooter,
} from './styles';

interface INotifications {
  id: string;
  content: string;
  recipient_id: string;
  created_at: string;
  read: boolean;
  timeDistance: string;
}

function NotificationsComponent() {
  const [notifications, setNotifications] = useState<INotifications[]>([]);
  const [visible, setVisible] = useState(false);
  const history = useHistory();
  const { user } = useContext(AuthContext);

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

  const notificationsCount = notifications.filter(
    notification => !notification.read,
  ).length;

  function handleToggleVisible() {
    setVisible(!visible);
  }

  function handleClick() {
    history.push('/list-notifications');
  }
  async function handleMarkAsRead(id: string) {
    await api.put('notifications/read', { id });

    setNotifications(
      notifications.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification,
      ),
    );
  }

  async function handleMarkAllAsRead() {
    const recipient_id = user?.id;
    await api.put('notifications/read-all', { recipient_id });

    setNotifications(
      notifications.map(notification =>
        notification.recipient_id === recipient_id
          ? { ...notification, read: true }
          : notification,
      ),
    );
  }
  return (
    <Container>
      <BadgeContainer onClick={handleToggleVisible}>
        <IconNotifications color="#fff" size={22} />
        <span>{notificationsCount}</span>
      </BadgeContainer>
      <NotificationList visible={visible}>
        <NotificationListHeader>
          <span>Notificações</span>
          <button type="button" onClick={handleMarkAllAsRead}>
            MARCAR TODAS COMO LIDAS
          </button>
        </NotificationListHeader>
        {notifications
          .sort((x, y) => {
            return (
              new Date(y.created_at).getTime() -
              new Date(x.created_at).getTime()
            );
          })
          .slice(0, 5)
          .map(notification => {
            return (
              <Notification unread={!notification.read} key={notification.id}>
                <p>{notification.content}</p>
                <time>{notification.timeDistance}</time>
                {!notification.read && (
                  <button
                    type="button"
                    onClick={() => handleMarkAsRead(notification.id)}
                  >
                    Marcar como lida
                  </button>
                )}
              </Notification>
            );
          })}
        <NotificationListFooter>
          <button type="button" onClick={handleClick}>
            VER TODAS
          </button>
        </NotificationListFooter>
      </NotificationList>
    </Container>
  );
}

export const Notifications = memo(NotificationsComponent);
