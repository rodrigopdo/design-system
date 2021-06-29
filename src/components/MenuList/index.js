import React from 'react';
import { Link } from 'react-router-dom';
import { menuData } from './menuData';
import { Menu, HeaderMenu, MenuItems } from './styles';


const MenuList = (props) => {
  return (
    <Menu>
        <h5>{props.title.toUpperCase()}</h5>
       {menuData.map((item, index) => {
            return (
              <>
                <HeaderMenu key={index}>
                </HeaderMenu>
                <MenuItems>
                  <Link to={item.path}>
                    {item.icon} <span>{item.subtitle}</span>
                  </Link>
                </MenuItems>
              </>
            )
          })}
    </Menu>
  )
}

export default MenuList;
