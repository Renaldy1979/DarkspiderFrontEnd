import styled from 'styled-components';

interface StatusItemProps {
  selected: boolean;
}
export const Container = styled.div<StatusItemProps>`
  display: flex;
  margin: 5px;
  padding: 10px;
  font-size: 12px;
  cursor: pointer;
  border-radius: 4px;
  flex: 1 1 auto;
  justify-content: center;

  ${props =>
    props.selected
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
