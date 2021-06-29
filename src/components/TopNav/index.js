import React from 'react';
import { Nav, Logo } from './styles';
import logo from '../../contents/logo/logo-light-vert.png';
const TopNav = () => {
  return (
    <Nav>
      <Logo>
        <img src={logo}></img>
      </Logo>
      <div>
       <h6>Design System Library</h6>
      </div>
    </Nav>
  )
}

export default TopNav;
