import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink activeClassName="selected" to={item.path} key={index}>
              {/* {item.icon} */}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;


const SidebarLink = styled(NavLink)`
  display: flex;
  color:  #595958;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 5px;
  &:hover {
    border-right: 4px solid #04AA6D;
    background-color: #E6E6E6;
    font-weight: 600;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;  
`;

const DropdownLink = styled(NavLink)`
  background-color: #f6f6f4;
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
    font-weight: 600;
  }
  &.selected {
    border-right: 4px solid #04AA6D;
    font-weight: 700;
  }
`;
