import styled from 'styled-components';

import { BsSearch, MdExitToApp, BsPersonFill } from '../../styles/icons';

export const Container = styled.div`
  z-index: 3;

  display: flex;
  flex-direction: column;
  background: var(--bg);
`;

export const Top = styled.div`
  z-index: 1000;
  display: flex;
  position: relative;
  align-items: center;
  top: 0;
  padding: 20px;
  > span {
    padding: 8px;
    border-radius: 50%;
    outline: 0;
    cursor: pointer;

    &hover {
      background: var(--gray);
    }
  }
`;

export const Bottom = styled.div``;

export const SearchWrapper = styled.div`
  display: flex;
  margin-bottom: 0;
  flex: 1 0 auto;
  flex-flow: row wrap;
  align-items: center;
`;

export const SearchInput = styled.input`
  height: 50px;
  font-size: 14px;
  padding: 0 10px 0 45px;
  border-radius: 25px;
  background: var(--search);
  border: 1px solid var(--gray);
  width: 400px;
  outline: 0;
  transition: width 0.1s;
  &::placeholder {
    color: var(--gray);
  }
  &:focus {
    border: 1px solid var(--spider);
    ~ svg {
      fill: var(--spider);
    }
    width: calc(400px + 10%);
  }
`;

export const SearchIcon = styled(BsSearch)`
  width: 14px;
  height: 14px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 40px;
  z-index: 1;
  transition: 180ms ease-in-out;
  fill: var(--secondary);
  outline: 0;
`;

export const NotificationWrapper = styled.div`
  margin-right: 30px;
  z-index: 1000;
`;

export const ProfileHeader = styled.div`
  display: none;
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    > strong {
      font-size: 15px;
      font-weight: 500;
      color: var(--white);
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
  position: relative;
  top: 50%;
  .dropdown-menu {
    font-size: 1rem;
    position: absolute;
    top: 0;
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
    font-size: 14px;
    font-weight: 700;
    padding-right: 1rem;
    padding-left: 1rem;
    text-transform: uppercase;
  }

  .dropdown-header-title {
    display: block;
    margin-bottom: 0;
    padding: 0.5rem 1rem;
    white-space: nowrap;
    color: #8898aa;
  }

  .dropdown-menu .dropdown-item {
  }

  .dropdown-item {
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: left;
    clear: both;
    width: 100%;
    padding: 0.75rem 1rem;
    text-align: inherit;
    white-space: nowrap;
    color: #212529;
    border: 0;
    background-color: transparent;
    :hover {
      background: rgba(245, 245, 245, 0.8);

      pointer-events: auto;
      opacity: 1;
    }
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
