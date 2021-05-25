import { shade } from 'polished';
import styled, { css } from 'styled-components';

import {
  IoHome,
  MdExitToApp,
  GoProject,
  MdFilterList,
  GiSupersonicArrow,
  DarkspiderIcon,
} from '../../styles/icons';

export const Container = styled.div`
  display: none;
  background: var(--secondary);
  min-width: 260px;
  /* width: 260px; */

  @media (min-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: start;
    position: sticky;
    top: 0;
    left: 0;
    padding: 10px 15px;
    height: 100vh;
    max-height: 100vh;
    overflow-y: auto;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  @media (min-width: 1280px) {
    align-items: center;
  }
`;

export const Logo = styled(DarkspiderIcon)`
  @media (min-width: 1280px) {
    width: 160px;
    height: 40;

    margin: 15px auto;

    display: flex;
    align-items: center;
    &::before {
      content: '';
      position: absolute;
      height: 50px;
      width: 80px;
      left: 50;
      top: 10%;
      background: #ff9000;
    }
  }
`;

export const Content = styled.div`
  a {
    text-decoration: none;
  }
`;

export const MenuButton = styled.div`
  display: flex;
  padding: 10px 0;
  margin: 15px 0;
  border-radius: 3px;
  align-items: center;
  transition: all 300ms linear;
  color: var(--white);
  text-decoration: none;

  > svg {
    color: var(--white);
    height: 24px;
    width: 24px;
    margin-left: 8.25px;
  }

  > span {
    margin-left: 8px;
    font-size: 16px;
    font-weight: 500;
  }

  &:hover {
    background: ${shade(0.4, '#fff')};
  }
  &.active {
    background: var(--spider);
  }
`;

export const Avatar = styled.div`
  > img {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 80px;
    height: 80px;
    background: var(--tertiary);
    margin-bottom: 15px;
  }
`;

export const ProfileHeader = styled.div`
  display: none;
  @media (min-width: 1280px) {
    display: flex;
    margin-bottom: 10px;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    > strong {
      font-size: 18px;
      color: var(--white);

      font-variant-caps: all-petite-caps;
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
  display: none;
  flex-direction: column;
  width: 100%;
`;

export const ProfileButton = styled.div`
  display: flex;
  padding: 10px 0;
  margin: 15px 0;
  border-radius: 3px;
  align-items: center;
  transition: all 300ms linear;
  color: var(--white);
  cursor: pointer;
  width: 100%;
  > svg {
    color: var(--white);
    height: 24px;
    width: 24px;
    margin-left: 8.25px;
  }

  > span {
    margin-left: 8px;
    font-size: 16px;
    font-weight: 500;
  }

  &:hover {
    background: ${shade(0.4, '#fff')};
  }
  &.active {
    background: var(--spider);
  }
`;

export const ExitIcon = styled(MdExitToApp)`
  display: none;
  @media (min-width: 1280px) {
    display: inline-block;
    width: 25px;
    height: 25px;
    color: var(--gray);
    margin-left: 10px;
    cursor: pointer;
    &:hover {
      > path {
        color: var(--spider);
      }
    }
  }
`;

const iconCSS = css`
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  color: var(--secondary);
`;

export const HomeIcon = styled(IoHome)`
  ${iconCSS}
`;

export const ProjectIcon = styled(GoProject)`
  ${iconCSS}
`;

export const AttributesIcon = styled(MdFilterList)`
  ${iconCSS}
`;

export const CampaignIcon = styled(GiSupersonicArrow)`
  ${iconCSS}
`;
export const Divider = styled.div`
  background: var(--outline);
  height: 1px;
  content: '';
  width: 100%;
  margin: 0;
`;
