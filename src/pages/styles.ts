import styled, { css } from 'styled-components';

import { IoHome, IoSearch, BsBell, IoIosMail } from '../styles/icons';

type TitleProps = {
  hidden?: boolean;
};

export const Container = styled.div`
  background: var(--secondary);
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: var(--primary);
  @media (min-width: 700px) {
    border-left: 0px solid var(--outline);
    border-right: 0px solid var(--outline);
  }
`;

export const Title = styled.div<TitleProps>`
  ${props =>
    props.hidden
      ? css`
          display: none;
        `
      : css`
          margin-left: 0;
          display: block;
          width: 100%;
          padding: 25px;
          max-height: 30px;

          > strong {
            font-size: 20px;
            font-weight: 500;
            margin-left: 0px;
          }
        `}
`;

export const BottomMenu = styled.div`
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
  @media (min-width: 600px) {
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
