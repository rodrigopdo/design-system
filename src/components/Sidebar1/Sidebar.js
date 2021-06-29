import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import logo from '../../contents/logo/logo-light-vert.png';

const Nav = styled.div`
  background: #424343;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  img {
    width: 75px;
  }
  h6 {
    color: #3DD969;
    padding-right: 40px;
  }
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 1rem;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: all 0.5s ease;
`;

const SidebarNav = styled.nav`
  background:  #f6f6f4;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 45px;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  padding: 40px 0 0 0;
  transition: all 0.5s ease-in-out;

`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#04AA6D' }}>
        <Nav>
          {sidebar === false ? 
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          :
          <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />  
          </NavIcon>
          }
          <div>
            <img src={logo}></img>
          </div>
          <div>
          <h6>Design System Library</h6>
          </div>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>          
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;