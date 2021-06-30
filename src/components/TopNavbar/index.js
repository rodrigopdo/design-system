import React, { useState } from 'react';
import { Nav, NavIcon } from './styles';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import logo from '../../contents/logo/logo-light-vert.png';

const TopNavbar = (props) => {

const [sidebar, setSideBar] = useState(false);

const showSidebar = () => setSideBar(!sidebar);

  return (
    <>
      <Nav>
        {sidebar === false ? 
        <NavIcon onClick={showSidebar} to='#'>
          <FaIcons.FaBars size={'1rem'} onClick={props.toggle} />
        </NavIcon>
        :
        <NavIcon onClick={showSidebar} to='#'>
            <AiIcons.AiOutlineClose size={'1.2rem'} onClick={props.toggle} />  
        </NavIcon>
        }
        <div>
          <img src={logo}></img>
        </div>
        <div>
        <h6>Design System Library</h6>
        </div>
      </Nav>
      
    </>
  )
}

export default TopNavbar;
