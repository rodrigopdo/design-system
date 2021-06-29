import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Menulist from '../MenuList';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SideBarContainer, BurgerBtn } from './styles';

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <BurgerBtn onClick={showSidebar}>
        <Link to="#">
         {sidebar ? <AiIcons.AiOutlineClose /> : <FaIcons.FaBars />}
        </Link>
      </BurgerBtn>
    <SideBarContainer position={sidebar ? true : false}>
       <Menulist title={'introdução'} />
       <Menulist title={'tokens'} />
    </SideBarContainer>
   </>
  )
}

export default Sidebar;
