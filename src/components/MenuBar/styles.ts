import { shade } from 'polished';
import styled, { css } from 'styled-components';

import {
  IoHome,
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
