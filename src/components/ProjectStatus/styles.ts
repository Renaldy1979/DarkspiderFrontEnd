import styled from 'styled-components';
import { FaArrowAltCircleRight } from '../../styles/icons';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  /* width: 100%; */
  flex-wrap: wrap;
  span {
    /* width: 100%; */
    margin-bottom: 10px;
  }
`;

export const ArrowIcon = styled(FaArrowAltCircleRight)`
  margin: 0 5px;
  fill: var(--outline);
  height: 22px;
  width: 22px;
`;

export const Title = styled.span`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-size: 1rem;
  font-weight: 500;
`;
