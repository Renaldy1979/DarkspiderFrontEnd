import styled from 'styled-components';
import { FaArrowAltCircleRight } from '../../styles/icons';

interface StatusItemProps {
  active: boolean;
}

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Title = styled.div`
  margin: 10px 0;
  font-size: 1rem;
  font-weight: 500;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex: 1 0 auto;
`;

export const StatusItem = styled.button<StatusItemProps>`
  margin: 5px;
  padding: 10px;
  cursor: pointer;
  border-radius: 4px;
  border: 0;
  font-size: 12px;

  ${({ active }) =>
    active &&
    `
    opacity: 1; 
  `}
  ${props =>
    props.active
      ? `
  background: var(--green);
  color: var(--white);
  box-shadow: 3px 3px 3px 0 rgb(0 0 0 / 20%);
  font-weight: 500;
  font-size: 1rem;
    `
      : `
  background: var(--outline);
  color: var(--text-body-light);
  `};
`;

export const ArrowIcon = styled(FaArrowAltCircleRight)`
  fill: var(--outline);
  height: 22px;
  width: 22px;
`;
