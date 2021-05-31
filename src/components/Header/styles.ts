import { shade } from 'polished';
import styled from 'styled-components';

import {
  BsSearch,
  BsFillBellFill,
  MdExitToApp,
  BsPersonFill,
} from '../../styles/icons';

export const Container = styled.div`
  z-index: 1000;

  position: sticky;
  background: var(--primary);

  > span {
    padding: 8px;
    border-radius: 50%;

    outline: 0;
    cursor: pointer;

    &hover {
      background: var(--gray);
    }
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  margin-bottom: 0;
  flex: 1 0 auto;
  flex-flow: row wrap;
  align-items: center;
`;

export const SearchInput = styled.input`
  height: 39px;
  font-size: 14px;
  padding: 0 10px 0 45px;
  border-radius: 19.5px;
  background: var(--search);
  border: 1px solid var(--gray);
  width: 400px;
  &::placeholder {
    color: var(--gray);
  }
`;

export const SearchIcon = styled(BsSearch)`
  width: 24px;
  height: 24px;
  fill: var(--gray);

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 12px;
  z-index: 1;
  transition: 180ms ease-in-out;
  fill: var(--gray);

  outline: 0;
  &:focus {
    border: 1px solid var(--spider);

    ~ svg {
      fill: var(--spider);
    }
  }
`;

export const BellIcon = styled(BsFillBellFill)`
  width: 24px;
  height: 24px;
  margin-left: 20px;
  display: flex;
  justify-content: center;
`;

export const NotificationWrapper = styled.div`
  margin-right: 30px;
`;

export const Notification = styled.div``;

export const ProfileHeader = styled.div`
  display: none;
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    > strong {
      font-size: 15px;
      font-weight: 400;
      color: var(--text-body-dark);
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }
`;

export const ProfileEdit = styled.div`
  .dropdown-menu {
    font-size: 1rem;
    position: absolute;
    top: 100%;
    z-index: 1000;
    left: 0;
    display: none;
    float: left;
    min-width: 10rem;
    margin: 0.125rem 0 0;
    padding: 0.5rem 0;
    list-style: none;
    text-align: left;
    color: #525f7f;
    border: 0 solid rgba(0, 0, 0, 0.15);
    border-radius: 0.4375rem;
    background-color: #fff;
    background-clip: padding-box;
    box-shadow: 0 50px 100px rgb(50 50 93 / 10%),
      0 15px 35px rgb(50 50 93 / 15%), 0 5px 15px rgb(0 0 0 / 10%);
    min-width: 12rem;
  }

  .dropdown-menu-right {
    right: 0;
    left: auto;
  }

  .navbar:not(.navbar-nav-hover) .dropdown-menu.show {
    animation: show-navbar-dropdown 0.25s ease forwards;
    pointer-events: auto;
    opacity: 1;
  }

  .dropdown-header {
    font-size: 0.625rem;
    font-weight: 700;
    padding-right: 1rem;
    padding-left: 1rem;
    text-transform: uppercase;
  }

  .dropdown-header {
    font-size: 0.875rem;
    display: block;
    margin-bottom: 0;
    padding: 0.5rem 1rem;
    white-space: nowrap;
    color: #8898aa;
  }

  .dropdown-menu .dropdown-item {
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
  }

  .dropdown-item {
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: left;
    clear: both;
    width: 100%;
    padding: 0.5rem 1rem;
    text-align: inherit;
    white-space: nowrap;
    color: #212529;
    border: 0;
    background-color: transparent;
  }

  a {
    text-decoration: none;
    color: #5e72e4;
    background-color: transparent;
  }

  .ni {
    display: inline-block;
    font: normal normal normal 14px/1 NucleoIcons;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .dropdown-divider {
    overflow: hidden;
    height: 0;
    margin: 0.5rem 0;
    border-top: 1px solid #e9ecef;
  }
`;

export const ProfileIcon = styled(BsPersonFill)`
  height: 16px;
  width: 16px;
  margin-right: 5px;
`;

export const ExitIcon = styled(MdExitToApp)`
  height: 16px;
  width: 16px;
  margin-right: 5px;
`;
