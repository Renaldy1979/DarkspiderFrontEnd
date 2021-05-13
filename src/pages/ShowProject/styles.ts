import { shade } from 'polished';
import styled from 'styled-components';

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
  display: flex;

  .vertical-timeline {
    width: 50%;
  }

  h3 {
    padding-top: 0.25em;
    font-weight: 300;
  }

  .vertical-timeline-element-content {
    box-shadow: 0 0.25em 0.5em 0 rgba(0, 0, 0, 0.25),
      0 0.4em 1.25em 0 rgba(0, 0, 0, 0.15) !important;
    /* padding: 2em 3em !important; */
    p {
      margin: 0.5em 0 0;
    }
  }

  .vertical-timeline-element-date {
    padding: 0;
    background: red;
  }

  .vertical-timeline-element-content .vertical-timeline-element-date {
    float: left;
  }

  .vertical-timeline-element-work {
    p {
      font-weight: 300;
    }
    h1 {
      color: var(--text-body-dark);
    }
  }

  #description {
  }

  #creater {
    margin-top: 4px;
    font-style: italic;
    font-weight: 400;
    font-size: 14px;
    color: var(--text-body-dark);
    display: flex;
    align-items: center;
    justify-content: flex-end;

    cursor: pointer;
    transition: all 300ms linear;
    border-radius: 4px;
    svg {
      height: 20px;
      width: 20px;
    }
    :hover {
      background: ${shade(0.4, '#fff')};
    }
  }
  .vertical-timeline-element {
    margin: 2em 0;
  }
`;
