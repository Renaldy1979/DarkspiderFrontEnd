import styled, { css } from 'styled-components';
import {
  FiArrowLeft,
  IoHome,
  IoSearch,
  BsBell,
  IoIosMail,
} from '../../styles/icons';

export const ContainerProject = styled.div`
  display: flex;
  flex-direction: column;

  width: min(601px, 100%);

  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;

export const Header = styled.div`
  z-index: 2;
  position: sticky;
  top: 0%;
  background: var(--primary);

  display: flex;
  align-items: center;

  text-align: left;

  padding: 8px 0 9px 13px;
  border-bottom: 1px solid var(--outline);

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

export const BackIcon = styled(FiArrowLeft)`
  width: 20px;
  height: 20px;

  fill: var(--tertiary);
`;

export const ProjectInfo = styled.div`
  margin-left: 17px;

  display: flex;
  flex-direction: column;

  > strong {
    font-size: 19px;
  }
  > span {
    font-size: 15px;
    color: var(--gray);
  }
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
  @media (min-width: 500px) {
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
