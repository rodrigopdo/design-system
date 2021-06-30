import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Introdução',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill style={{fontSize: '20px'}} />,
    iconOpened: <RiIcons.RiArrowUpSFill style={{fontSize: '20px'}} />,

    subNav: [
      {
        title: 'Sobre o Design System',
        path: '/introduction/about',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Como utilizar',
        path: '/introduction/howToUse',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Tokens',
    path: '/tokens',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill style={{fontSize: '20px'}} />,
    iconOpened: <RiIcons.RiArrowUpSFill style={{fontSize: '20px'}} />,

    subNav: [
      {
        title: 'Cores',
        path: '/tokens/colours',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Tipografia',
        path: '/tokens/typography',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      }
    ]
  }
];