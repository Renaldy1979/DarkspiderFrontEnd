import styled from 'styled-components';
import { MdModeEdit, MdClose } from '../../styles/icons';

export {
  Container,
  Wrapper,
  Content,
  Header,
  Title,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  BellIcon,
  NotificationWrapper,
  Notification,
} from '../styles';

export const Main = styled.div`
  margin-left: 10px;
`;

export const Projects = styled.div`
  /* display: flex;
  flex-direction: column;
  flex-shrink: 0; */
  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
  }
`;

export const ProjectsTable = styled.div`
  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body-dark);
      font-weight: 500;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }
    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--white);
      color: var(--text-body-light);
      border-radius: 0.25rem;

      &:first-child {
        color: var(--text-body-dark);
      }
      &:last-child {
        width: 146px;
      }

      button {
        width: 36px;
        height: 36px;
        align-items: center;
        background: ${props => props.color};
        border: 0;
        border-radius: 3px;
      }
      .editProject {
        background: var(--success);
      }
      .deleteProject {
        background: var(--error);
      }
      button + button {
        margin-left: 10px;
      }
    }
    .projectName {
      min-width: 300px;
    }
  }
`;

export const EditIcon = styled(MdModeEdit)`
  fill: var(--white);
  width: 24px;
  height: 24px;
`;

export const DeleteIcon = styled(MdClose)`
  fill: var(--white);
  width: 24px;
  height: 24px;
`;
