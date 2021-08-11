import React, {
  FormEvent,
  useCallback,
  useEffect,
  useState,
  useRef,
  useContext,
} from 'react';

import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Modal from 'react-modal';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { AuthContext } from '../../hooks/auth';

import {
  Container,
  Header,
  IconChangeStatus,
  IconAlertStatus,
  IconDefaultStatus,
} from './styles';

import {} from '../../styles/icons';

import IComments from '../../interfaces/IComments';
import { api } from '../../services/api';
import Button from '../Button';
import { useUsers } from '../../hooks/useUsers';
import { useToast } from '../../hooks/toast';
import Can from '../Can';
import Card from '../Card';

interface TimelineCommentsProps {
  project_id: string;
}
interface TypeComment {
  id: string;
  description: string;
  component: string;
  color: string;
}

export function TimelineComments({ project_id }: TimelineCommentsProps) {
  const { user } = useContext(AuthContext);
  const { users } = useUsers();
  const { addToast } = useToast();

  const formRef = useRef(null);

  const [isNewCommentModalOpen, setIsNewCommentModalOpen] = useState(false);

  const [comments, setComments] = useState<IComments[]>([]);
  const [commentTypes, setCommentTypes] = useState<TypeComment[]>([]);

  const [formDescription, setFormDescription] = useState('');
  const [formType, setFormType] = useState(
    'f04566c6-9d00-431f-a42b-1fc41394ded8',
  );

  Modal.setAppElement('#root');

  function handleOpenNewCommentModal() {
    setIsNewCommentModalOpen(true);
  }
  function handleCloseNewCommentModal() {
    setFormDescription('');
    setIsNewCommentModalOpen(false);
  }

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

  useEffect(() => {
    try {
      api.get<TypeComment[]>('comment-type').then(response => {
        setCommentTypes(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

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

  async function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    try {
      const dataNewComment = {
        description: formDescription,
        project_id,
        creater_id: user?.id,
      };

      const response = await api.post('/comments', {
        ...dataNewComment,
        type_id: formType,
      });
      const { data } = response;
      const type = commentTypes.find(item => item.id === formType);
      const creater = users.find(item => item.id === user?.id);

      handleCloseNewCommentModal();

      setComments([
        ...comments,
        { ...data, type, creater: { id: creater?.id, name: creater?.name } },
      ]);
    } catch (error) {
      console.log(error);
      addToast({
        type: 'error',
        title: 'Erro ao salvar os dados',
        description: 'Ocorreu um erro',
      });
    }
  }
  const header = (
    <Header>
      <Can permissions={['project.timeline.create']} roles={['ROLE_USER']}>
        <Button type="button" onClick={handleOpenNewCommentModal}>
          NOVO COMENTÁRIO
        </Button>
      </Can>
      <Can>
        <Button type="button">ATUALIZAR</Button>
      </Can>
    </Header>
  );
  return (
    <Card top header={header}>
      <Container>
        <Modal
          isOpen={isNewCommentModalOpen}
          className="new-comment-modal"
          overlayClassName="new-comment-modal-overlay"
        >
          <div className="new-comment-modal-title">
            <strong>Inserir novo comentário</strong>
          </div>
          <div className="new-comment-modal-divider" />
          <form
            ref={formRef}
            onSubmit={handleCreateNewComment}
            className="new-comment-modal-form"
          >
            <h1>Comentário</h1>
            <textarea
              name="comment"
              rows={4}
              placeholder="Insira aqui seu comentário"
              value={formDescription}
              onChange={event => setFormDescription(event.target.value)}
            />
            <h1>Tipo do comentário</h1>
            <div className="new-comment-modal-form-type">
              {commentTypes.map(typeItem => {
                return (
                  <span key={typeItem.id}>
                    <input
                      type="radio"
                      value={typeItem.id}
                      name="type_id"
                      defaultChecked
                      onClick={event => setFormType(event.currentTarget.value)}
                    />
                    <span
                      style={{
                        background: `var(${typeItem.color}-light)`,
                        color: `var(${typeItem.color}-dark)`,
                      }}
                    >
                      {typeItem.description}
                    </span>
                  </span>
                );
              })}
            </div>
            <div className="new-comment-modal-form-buttom">
              <Button type="submit">SALVAR</Button>
              <Button type="button" onClick={handleCloseNewCommentModal}>
                FECHAR
              </Button>
            </div>
          </form>
        </Modal>
        <VerticalTimeline
          layout="1-column"
          animate
          className="vertical-timeline"
        >
          {comments
            .sort((x, y) => {
              return (
                new Date(y.created_at).getTime() -
                new Date(x.created_at).getTime()
              );
            })
            .map(commentItem => {
              return (
                <VerticalTimelineElement
                  key={commentItem.id}
                  className="vertical-timeline-element-work"
                  contentStyle={{
                    background: 'rgb(255, 255, 255)',
                    color: '#999591',
                    height: '100%',
                  }}
                  iconStyle={{
                    background: `var(${commentItem.type.color}-light)`,
                    color: `var(${commentItem.type.color}-dark)`,
                  }}
                  icon={switchCase(commentItem.type.component)}
                >
                  <h1 className="vertical-timeline-element-title">
                    {`${format(
                      new Date(commentItem.created_at),
                      "dd'/'MM '/'yyyy",
                      {
                        locale: ptBR,
                      },
                    )} por ${commentItem.creater.name}`}
                  </h1>
                  <p className="description">{commentItem.description}</p>
                  <span
                    className="type-description"
                    style={{
                      color: `var(${commentItem.type.color}-dark)`,
                      background: `var(${commentItem.type.color}-light)`,
                    }}
                  >
                    {commentItem.type.description}
                  </span>
                </VerticalTimelineElement>
              );
            })}
        </VerticalTimeline>
      </Container>
    </Card>
  );
}

export default TimelineComments;
