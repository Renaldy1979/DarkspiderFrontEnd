import styled from 'styled-components';
import { BsSearch, BsFillBellFill } from '../styles/icons';

export const Container = styled.div`
  background: var(--primary);
`;

export const Wrapper = styled.div`
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  width: min(1001px, 100%);
  padding: 30px 20px;
  @media (min-width: 500px) {
    /* border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline); */
  }
`;
export const Title = styled.div`
  margin-left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;

  > strong {
    font-size: 24px;
    margin-left: 10px;
  }
`;

export const Header = styled.div`
  z-index: 2;
  position: sticky;
  background: var(--primary);

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  padding-bottom: 20px;
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

export const SearchWrapper = styled.div`
  /* padding: 0px 24px; */
  width: min(399px, 100%);
  position: flex;
  top: 0;
  background: var(--primary);
  max-height: 39px;

  /* margin-top: 10px; */
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 39px;
  font-size: 14px;
  padding: 0 10px 0 52px;
  border-radius: 19.5px;
  background: var(--search);
  border: 1px solid var(--gray);
  &::placeholder {
    color: var(--gray);
  }
  ~ svg {
    position: relative;
    top: -33px;
    left: 15px;
    z-index: 1;
    transition: 180ms ease-in-out;
    fill: var(--gray);
  }
  outline: 0;
  &:focus {
    border: 1px solid var(--spider);
    ~ svg {
      fill: var(--spider);
    }
  }
`;

export const SearchIcon = styled(BsSearch)`
  width: 24px;
  height: 24px;
  fill: var(--gray);
`;

export const BellIcon = styled(BsFillBellFill)`
  width: 24px;
  height: 24px;
  margin-left: 20px;
  display: flex;
  justify-content: center;
`;

export const NotificationWrapper = styled.div``;

export const Notification = styled.div``;
