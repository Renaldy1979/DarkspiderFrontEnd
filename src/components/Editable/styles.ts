import styled from 'styled-components';

export const Container = styled.div`
  input,
  textarea,
  span {
    font-size: 1rem;
    font-weight: normal;
    text-align: center;
    width: 100%;
    color: var(--text-body-light);
  }

  textarea {
    text-align: left;
  }

  .project-header-title {
    font-size: 24px;
    font-weight: 500;
    line-height: 40px;
    flex: 1;
    color: var(--white);
  }
  .project-description-justification {
    font-size: 1rem;
    font-weight: 400;
    line-height: 25px;
    color: var(--text-body-light);
    margin-top: 5px;
  }
  .project-date-item {
    font-size: 1rem;
    font-weight: 400;
    line-height: 25px;
    color: var(--text-body-light);
    margin-top: 5px;
  }
`;
