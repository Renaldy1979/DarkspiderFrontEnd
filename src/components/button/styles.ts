import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  button {
    font-size: 14px;
    padding: 10px;
    color: var(--white);
    overflow: visible;
    background: #ff9000;
    border-radius: 0.25rem;
    border: 0;
    font-weight: 500;
    /* margin-top: 16px; */
    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }
`;
