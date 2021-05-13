import styled, { css } from 'styled-components';

import { IoHome, IoSearch, BsBell, IoIosMail } from '../../styles/icons';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
  background: var(--primary);
  width: 100%;
  border-top: 1px solid var(--outline);
  display: flex;
  justify-content: space-between;
  padding: 8px min(46px, max(10vw, 10px));
  @media (min-width: 501px) {
    display: none;
  }
`;

const iconCSS = css`
  width: 24px;
  height: 24px;

  cursor: pointer;

  fill: var(--gray);

  &:hover,
  &.active {
    fill: var(--spider);
  }
`;

export const HomeIcon = styled(IoHome)`
  ${iconCSS}
`;

export const SearchIcon = styled(IoSearch)`
  ${iconCSS}
`;

export const BellIcon = styled(BsBell)`
  ${iconCSS}
`;

export const EmailIcon = styled(IoIosMail)`
  ${iconCSS}
`;
