import React, { useCallback, useEffect, useState } from 'react';

import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import {
  Container,
  IconChangeStatus,
  IconAlertStatus,
  IconDefaultStatus,
} from './styles';

import {} from '../../styles/icons';

import IComments from '../../interfaces/IComments';
import { api } from '../../services/api';

interface TimelineCommentsProps {
  project_id: string;
}

export function TimelineComments({ project_id }: TimelineCommentsProps) {
  const [comments, setComments] = useState<IComments[]>([]);

  useEffect(() => {
    try {
      if (project_id) {
        api
          .get<IComments[]>(`/comments/project/${project_id}`)
          .then(response => {
            setComments(response.data);
          });
      }
    } catch (error) {
      console.log(error);
    }
  }, [project_id]);

  const switchCase = useCallback((props?: string) => {
    switch (props) {
      case 'ChangeStatus':
        return <IconChangeStatus />;
      case 'DefaultStatus':
        return <IconDefaultStatus />;
      case 'AlertStatus':
        return <IconAlertStatus />;
      default:
        return <IconDefaultStatus />;
    }
  }, []);

  return (
    <Container>
      <VerticalTimeline layout="1-column" animate className="vertical-timeline">
        {comments
          .sort((x, y) => {
            return (
              new Date(y.created_at).getTime() -
              new Date(x.created_at).getTime()
            );
          })
          .map(comment => {
            return (
              <VerticalTimelineElement
                key={comment.id}
                className="vertical-timeline-element-work"
                contentStyle={{
                  background: 'rgb(255, 255, 255)',
                  color: '#999591',
                  height: '100%',
                }}
                iconStyle={{
                  background: `${comment.type.color}`,
                  color: '#fff',
                }}
                icon={switchCase(comment.type.component)}
                date={`${format(
                  new Date(comment.created_at),
                  "d 'de' MMMM 'de' yyyy",
                  { locale: ptBR },
                )} por ${comment.creater.name}`}
              >
                <h1 className="vertical-timeline-element-title">
                  {comment.type.description}
                </h1>
                <p id="description">{comment.description}</p>
              </VerticalTimelineElement>
            );
          })}
      </VerticalTimeline>
    </Container>
  );
}

export default TimelineComments;
