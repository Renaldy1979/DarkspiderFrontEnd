import { tint } from 'polished';
import styled from 'styled-components';
import { BsThreeDotsVertical } from '../../styles/icons';

export const Container = styled.div`
  max-width: 1000px;
  margin-right: 50px;
  padding-bottom: 35px;
`;

export const Card = styled.div`
  align-items: center;
  background: var(--white);
  margin-right: 40px;
  box-shadow: 0 0 2rem 0 rgba(136, 152, 170, 0.15);
  border-radius: 4px;
  flex-direction: column;
  width: 100%;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;

  .project-header-title {
    font-size: 24px;
    font-weight: 500;
    flex: 1;
  }

  input {
    font-size: 24px;
    font-weight: 500;
    line-height: 40px;
    flex: 1;
    color: var(--secondary);
    background: transparent;
    text-align: left;
    border: 1px solid var(--spider-light);
  }
`;

export const CardContent = styled.div`
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

  display: flex;
  margin-top: 20px;
  padding: 0 20px 20px;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  flex-direction: column;

  span {
    font-size: 1rem;
    font-weight: 500;
    line-height: 25px;
  }
`;
export const ProjectDateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const ProjectDateItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5px 20px;
  margin: 10px;
  border-radius: 4px;
  background: ${tint(0.8, '#ff9000')};
  flex: 1;

  input {
    font-size: 1rem;
    font-weight: 400;
    line-height: 25px;
    color: var(--text-body-light);
    margin-top: 5px;
    width: 90px;
    border: 0;
  }
`;

export const Divider = styled.div`
  background: var(--outline);
  height: 1px;
  content: '';
  width: 100%;
  margin: 15px 0;
`;
export const ProjectDescription = styled.div`
  textarea {
    font-size: 1rem;
    font-weight: 400;
    line-height: 25px;
    color: var(--text-body-light);
    margin-top: 5px;
    border: 1px solid var(--outline);
  }
  width: 100%;
`;

export const ProjectJustification = styled(ProjectDescription)``;

export const ProjectUpdated = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  p {
    font-size: 1rem;
    font-style: italic;
    font-weight: 400;
    line-height: 25px;
    color: var(--text-body-light);
    margin-top: 5px;
  }
`;

export const ProjetcOwner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;
export const ProjectOwnerTitle = styled.div`
  width: 100%;
  margin-bottom: 15px;
  span {
  }
`;
export const ProjectOwnerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ProjectOwnerItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
  flex: 1;
  font-weight: 400;
  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin-right: 15px;
  }
  div {
    .requester-name {
      font-size: 14px;
      margin-bottom: 3px;
    }
  }

  span {
    color: var(--green);
  }
  small {
    font-weight: 300;
    font-size: 14px;
    margin-left: 5px;
  }
`;

export const OptionsProject = styled(BsThreeDotsVertical)``;
