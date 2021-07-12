import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const SidebarLink = styled(NavLink)`
  display: flex;
  color:  #595958;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 3px;
  &:hover {
    border-right: 4px solid #04AA6D;
    background-color: #E6E6E6;
    font-weight: 600;
  }
`;

export const SidebarLabel = styled.span`
  margin-left: 16px;  
`;

export const DropdownLink = styled(NavLink)`
  background-color: #fafafa;
  height: 30px;
  padding-left: 1.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333333;
  font-size: 0.8rem;
  &:hover {
    border-right: 4px solid #04AA6D;
    background-color: #E6E6E6;
    font-weight: 700;
  }
  &.selected {
    border-right: 4px solid #04AA6D;
    font-weight: 700;
  }
  &.active {
    font-weight: bolder;
    opacity: 0.1;
  }
`;
