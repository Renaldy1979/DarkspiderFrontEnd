import styled from 'styled-components';

interface NotificationProps {
  unread?: boolean;
}

export const Content = styled.div`
  padding: 20px;
`;

export const NotificationList = styled.div`
  display: flex;
  flex-direction: column;
  left: 0;
  top: 30px;
  padding: 15px 5px;
`;

export const Notification = styled.div<NotificationProps>`
  color: var(--text-body-dark);
  display: flex;
  flex-direction: column;
  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
  p {
    font-size: 1rem;
    line-height: 18px;
  }
  time {
    font-size: 1rem;
    opacity: 0.6;
    display: inline;
    padding-top: 5px;
  }
`;
