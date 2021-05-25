import { tint } from 'polished';
import styled from 'styled-components';
import { MdPerson, BsThreeDotsVertical } from '../../styles/icons';

export const Container = styled.div`
  width: 100%;
`;

export const Card = styled.div`
  background: var(--white);
  margin-right: 40px;
  box-shadow: 4px 4px 4px 0 rgb(0 0 0 / 14%);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 30px;
  border-radius: 4px;
`;

export const CardHeader = styled.div`
  background: var(--spider);
  color: var(--white);
  border-radius: 4px;
  width: calc(100% - 30px);

  position: relative;
  margin-top: -20px;
  box-shadow: 4px 4px 4px 0 rgb(0 0 0 / 14%);
  padding: 10px;
`;

export const ProjectHeader = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  min-height: 40px;

  button {
    width: 41px;
    height: 41px;
    font-size: 20px;
    min-width: 41px;
    padding-left: 12px;
    padding-right: 12px;
    border-radius: 30px;
    color: #999;
    background-color: #fff;
    border: none;
    cursor: pointer;
    &:hover {
      box-shadow: 0 14px 26px -12px rgb(153 153 153 / 42%),
        0 4px 23px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(153 153 153 / 20%);
    }
  }

  h1 {
    font-size: 24px;
    font-weight: 500;
    line-height: 40px;
    flex: 1;
  }
`;

export const CardContent = styled.div`
  margin-top: 20px;
  padding: 0 20px 20px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  flex-direction: column;

  span {
    font-size: 1rem;
    font-weight: 500;
    line-height: 25px;
  }
  p {
    font-size: 1rem;
    font-weight: normal;
    line-height: 25px;
    color: var(--text-body-light);
    margin-top: 5px;
  }
`;
export const ProjectDataContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  justify-content: space-between;
`;

export const ProjectDataItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5px 20px;
  cursor: pointer;
  transition: all 300ms linear;
  border-radius: 4px;
  &:hover {
    background: ${tint(0.7, '#ff9000')};
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
  width: 100%;
`;

export const ProjectJustification = styled(ProjectDescription)``;

export const ProjectUpdated = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const ProjetcOwner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const ProjectOwnerItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
  flex-wrap: wrap;
  span {
    width: 100%;
    margin-bottom: 10px;
  }
  p {
    flex: 1;
  }
`;

export const OwnerIcon = styled(MdPerson)`
  height: 26px;
  width: 26px;
  margin-right: 8px;
`;

export const OptionsProject = styled(BsThreeDotsVertical)``;
