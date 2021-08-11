import styled, { css } from 'styled-components';
import Tooltip from '../../tooltip';

interface ContentProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div`
  span {
    display: inline-block;
    margin-bottom: 0.5rem;
  }
`;
export const Content = styled.div<ContentProps>`
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  background-color: #fff;
  background-clip: padding-box;
  box-shadow: 0 3px 2px rgb(233 236 239 / 5%);
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  svg {
    margin: 10px;
  }
  textarea {
    flex: 1;
    font-size: 1rem;
    resize: none;
    font-weight: 400;
    line-height: 1.5;
    display: block;
    width: 100%;
    padding: 0.625rem 0.725rem;
    transition: all 0.15s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    color: var(--text-body-light);
    border: none;
    &::placeholder {
      color: #666360;
    }
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
      svg {
        color: #c53030;
      }
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 10px;
  margin-right: 10px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
