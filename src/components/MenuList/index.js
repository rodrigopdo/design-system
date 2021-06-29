import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { menuData } from './menuData';
import { Menu, MenuItems } from './styles';


const MenuList = (props) => {
  const [open, setOpen] = useState(false);

  const showSidebar = () => {
    console.log('okokok')
    setOpen(!open)
  }
  // const toggle = (i) => {
  //   if (open === i) {
  //     return setOpen(null)  
  //   }
  //   setOpen(i)
  // }

  return (
    <Menu>
      <h5 onClick={showSidebar}>{props.title.toUpperCase()}</h5>
      {menuData.map((item, index) => {
        {open === index ?
          <MenuItems key={index} show={true}>
            <Link to={item.path}>
              {item.icon} <span>{item.subtitle}</span>
            </Link>
          </MenuItems>
        :  
          <MenuItems key={index} show={true}>
            <Link to={item.path}>
              {item.icon} <span>{item.subtitle}</span>
            </Link>
          </MenuItems>}  
      })}
    </Menu>
  )
}

export default MenuList;
