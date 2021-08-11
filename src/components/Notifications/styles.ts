import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import { BsFillBellFill } from '../../styles/icons';

interface BadgeProps {
  hasUnread: boolean;
}

interface NotificationProps {
  unread: boolean;
}

interface NotificationListProps {
  visible: boolean;
}
export const Container = styled.div`
  position: relative;
  color: #fff;
`;

export const Badge = styled.button<BadgeProps>`
  background: none;
  border: 0;
  position: relative;
  ${props =>
    props.hasUnread &&
    css`
      &::after {
        position: absolute;
        right: 50;
        top: 0;
        width: 22px;
        height: 22px;
        background: #ff892e;
        content: '';
        border-radius: 50%;
      }
    `}
`;

export const IconNotifications = styled(BsFillBellFill)``;

export const NotificationList = styled.div<NotificationListProps>`
  z-index: 1000;
  display: flex;
  position: absolute;
  width: 300px;
  left: -280px;
  top: calc(100% + 20px);
  background: var(--secondary);
  border-radius: 5px;
  display: ${props => (props.visible ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;
    left: calc(100% - 21px);
    top: -10px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #514c5c;
  }

  @media (min-width: 1280px) {
    width: 500px;
    left: calc(50% - 250px);
    top: calc(100% + 20px);

    &::before {
      left: calc(50% - 10px);
    }
  }
`;

export const Notification = styled.div<NotificationProps>`
  color: var(--white);
  padding: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  p {
    font-size: 13px;
    line-height: 18px;
  }
  time {
    font-size: 12px;
    opacity: 0.6;
  }
  button {
    font-size: 12px;
    border: 0;
    background: none;
    color: ${lighten(0.2, '#ff9000')};
    padding: 0 5px;
    margin: 0 5px;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
  }
  ${props =>
    props.unread &&
    css`
      &::after {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        background: #ff892e;
        border-radius: 50%;
        margin-left: 5px;
      }
    `}
`;

export const BadgeContainer = styled.button`
  border: none;
  background: none;
  display: flex;
  position: relative;
  flex-shrink: 0;
  vertical-align: middle;

  flex: 0 0 auto;
  overflow: visible;
  font-size: 1.5rem;
  text-align: center;
  border-radius: 50%;
  border: 0;
  background: none;

  span {
    height: 20px;
    display: flex;
    padding: 0 6px;
    z-index: 1;
    position: absolute;
    flex-wrap: wrap;
    font-size: 0.75rem;
    min-width: 20px;
    box-sizing: border-box;
    transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    align-items: center;
    font-weight: 500;
    line-height: 1;
    align-content: center;
    border-radius: 10px;
    flex-direction: row;
    justify-content: center;
    background: var(--spider);
    top: 0;
    right: 0;
    transform: scale(1) translate(50%, -50%);
    transform-origin: 100% 0%;
  }
`;

export const NotificationListHeader = styled.div`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: #514c5c;
  span {
    font-size: 18px;
  }

  button {
    border: none;
    font-size: 14px;
    font-weight: 600;
    color: var(--spider);
    background: none;
    &:hover {
      color: #fff;
    }
  }
`;

export const NotificationListFooter = styled.div`
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #514c5c;
  padding: 20px;
  button {
    border: none;
    font-size: 14px;
    font-weight: 600;
    color: var(--spider);
    background: none;
    &:hover {
      color: #fff;
    }
  }
`;
