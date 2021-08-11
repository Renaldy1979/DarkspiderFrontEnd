import styled, { css } from 'styled-components';

import {
  IoHome,
  GoProject,
  MdFilterList,
  GiSupersonicArrow,
  DarkspiderIcon,
} from '../../styles/icons';

interface SidebarNavProps {
  sidebar?: boolean;
}
export const Container = styled.div`
  display: none;
  background: var(--secondary);
  @media (min-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: sticky;
    top: 0;
    left: 0;
    padding: 20px;
    height: 100vh;
    overflow-y: auto;
    width: 350px;
  }
`;

export const SidebarNav = styled.nav<SidebarNavProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  //position: fixed;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  top: 0;
  transition: 350ms;

  z-index: 10;
`;

export const Logo = styled(DarkspiderIcon)`
  width: 160px;
  height: 40;
  margin: 15px auto;
  display: flex;
  align-items: center;
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
