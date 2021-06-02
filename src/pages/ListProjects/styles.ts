import styled from 'styled-components';
import { MdModeEdit, MdClose, MdSearch } from '../../styles/icons';

export { Container, Wrapper, Content, Title, Main } from '../styles';

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
      /* font-size: 14px; */

      &:first-child {
        color: var(--text-body-dark);
      }

      .projectName {
        min-width: 300px;
      }

      .fitwidth {
        width: 1px;
        white-space: nowrap;
      }

      .smallfont {
        font-size: 15px;
        font-family: 'Roboto', sans-serif;
      }
    }
    .link {
      cursor: pointer;
    }
  }
`;

export const EditIcon = styled(MdModeEdit)`
  fill: var(--white);
  width: 20px;
  height: 20px;
`;

export const DeleteIcon = styled(MdClose)`
  fill: var(--white);
  width: 20px;
  height: 20px;
`;

export const ShowIcon = styled(MdSearch)`
  fill: var(--white);
  width: 20px;
  height: 20px;
`;
