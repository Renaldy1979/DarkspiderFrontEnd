import styled from 'styled-components';

export const Container = styled.div`
  background: var(--primary);
`;

export const Wrapper = styled.div`
  height: 100%;
  /* max-width: 1280px; */
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: min(1001px, 100%);

  @media (min-width: 500px) {
  }
`;
export const Title = styled.div`
  margin-left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 25px;
  padding-left: 35px;
  max-height: 30px;

  > strong {
    font-size: 20px;
    font-weight: 500;
    margin-left: 0px;
  }
`;
export const Main = styled.div`
  z-index: 0;
  display: flex;
  background: var(--primary);
  padding-right: 30px;
  padding-left: 30px;
  margin-top: 0px;
`;

// export const BackgroundHead = styled.div`
//   background: pink;
//   content: 's';
//   height: 20px;
//   display: flex;
//   width: 100%;
//   flex-direction: row;
// `;
