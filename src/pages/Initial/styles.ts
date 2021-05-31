import styled from 'styled-components';
import { FiCheckSquare } from '../../styles/icons';

interface ContainerProps {
  color: string;
}

export { Container, Wrapper, Content, Title, Main } from '../styles';

export const GridContainer = styled.div`
  width: 100%;
  min-height: 200px;
  display: flex;
  justify-content: space-between;
`;

export const GridItem = styled.div`
  display: flex;
  flex: 1;
  max-width: 400px;
  background: var(--white);
  box-shadow: 0 1px 4px 0 rgb(0 0 0 / 14%);
  border-top: 1px solid rgb(0 0 0 / 14%);
`;

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

export const CardHeader = styled.div`
  display: flex;
`;

export const CardIcon = styled.div<ContainerProps>`
  display: flex;

  background: ${props => props.color};

  padding: 8px;
  height: 38px;
  width: 100%;
  border-radius: 4px 4px 0 0;

  z-index: 2;
`;

export const Icon = styled(FiCheckSquare)`
  color: white;
  height: 100%;
  width: 100%;
`;

export const CardFooter = styled.div`
  color: var(--gray);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 42px;
  }
  a {
    text-decoration: none;
    margin-bottom: 15px;
    color: var(--gray);
  }
  &::before {
    content: '';
    height: 1px;
    width: 100%;
    left: 50;
    top: 10%;
    background: none;
  }
`;
