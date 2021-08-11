import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

interface DropdownLinkProps {
  active: boolean;
}

interface SidebarLinkProps {
  active: boolean;
}

export const SidebarLink = styled.button<SidebarLinkProps>`
  background: none;
  border: none;
  display: flex;
  width: 100%;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background: #514c5c;
    border-left: 4px solid var(--spider);
    cursor: pointer;
  }
  ${props =>
    props.active &&
    css`
      border-left: 4px solid var(--spider);
      background: #514c5c;
    `}
  transition: all 0.15s cubic-bezier(0.68, -0.55, 0.265, 1.55);
`;

export const SidebarLabel = styled.span`
  margin-left: 16px;
`;

export const DropdownLink = styled.button<DropdownLinkProps>`
  // transition: 200ms;
  transition: all 0.15s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  width: 100%;
  border: 0;
  background: var(--secondary);
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  &:hover {
    background: #514c5c;
    border-left: 4px solid var(--spider);
  }
  ${props =>
    props.active &&
    css`
      border-left: 4px solid var(--spider);
      color: var(--spider);
    `}
`;
