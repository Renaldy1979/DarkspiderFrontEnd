import styled from 'styled-components';

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
  padding: 35px 45px;
  @media (min-width: 500px) {
  }
`;
export const Title = styled.div`
  margin-left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 35px;
  padding-bottom: 25px;

  > strong {
    font-size: 20px;
    font-weight: 500;
    margin-left: 0px;
  }
`;

export const Main = styled.div``;
