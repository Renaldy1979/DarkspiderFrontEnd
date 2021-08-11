import styled, { css } from 'styled-components';
import { CgFolderAdd, IoIosArrowDown, IoIosArrowUp } from '../../styles/icons';

interface HeadProps {
  hasStyle?: boolean;
}

interface ContainerProps {
  top: boolean;
}
export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  background: var(--white);
  border-radius: 4px;
  margin: 0;
  margin-bottom: 30px;
  border: 0;
  box-shadow: 0 0 2rem 0 rgb(136 152 170 / 15%);
  ${props =>
    props.top &&
    css`
      margin-top: -80px;
    `}
`;
export const Header = styled.div<HeadProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  ${props =>
    props.hasStyle &&
    css`
      background: var(--spider);
      color: var(--white);
    `}
  border-bottom: 2px solid rgba(0, 0, 0, 0.05);
  border-radius: calc(0.375rem - 1px) calc(0.375rem - 1px) 0 0;
  padding: 20px;

  .control-titles {
    h4 {
      margin-top: 0px;
      font-size: 20px;
    }
    h6 {
      margin-bottom: 0;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: var(--secondary);
      font-size: 0.825rem;
    }
  }
  .control-buttons {
    display: flex;
    align-items: center;
    justify-content: end;
    flex-direction: row;
    button {
      margin-left: 10px;
      width: 35px;
      height: 35px;
      border-radius: 30px;
      color: var(--text-body-dark);
      background-color: var(--gray-light);
      border: 1px solid var(--gray);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 18px;
        height: 18px;
      }
      &:hover {
        border: 1px solid var(--spider);
        background-color: var(--white);
        color: var(--spider);
      }
    }
  }
`;
export const Body = styled.div``;
export const Footer = styled.div`
  padding: 20px;
  border-radius: 0 0 calc(0.375rem - 1px) calc(0.375rem - 1px);
`;

export const ButtonNewItem = styled(CgFolderAdd)``;
export const ArrowDownButton = styled(IoIosArrowDown)``;
export const ArrowUpButton = styled(IoIosArrowUp)``;
