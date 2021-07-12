import React, { useState } from 'react';
import { SidebarWrap, SidebarNav} from './styles';
import { SidebarData } from './data/sidebarData';
import TopNavbar from '../TopNavbar';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#04AA6D' }}>
        <TopNavbar toggle={showSidebar} />
          
        <SidebarNav showBar={sidebar}>
            <SidebarWrap>          
              {SidebarData.map((item, index) => {
                return <SubMenu close={showSidebar} item={item} key={index} />;
              })}
            </SidebarWrap>
        </SidebarNav>
          
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;


        {/* <Nav>
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
        </Nav> */}