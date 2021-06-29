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
      },
      {
        title: 'Reports 3',
        path: '/reports/reports3',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  }
  // {
  //   title: 'Products',
  //   path: '/products',
  //   icon: <FaIcons.FaCartPlus />
  // },
  // {
  //   title: 'Team',
  //   path: '/team',
  //   icon: <IoIcons.IoMdPeople />
  // },
  // {
  //   title: 'Messages',
  //   path: '/messages',
  //   icon: <FaIcons.FaEnvelopeOpenText />,

  //   iconClosed: <RiIcons.RiArrowDownSFill />,
  //   iconOpened: <RiIcons.RiArrowUpSFill />,

  //   subNav: [
  //     {
  //       title: 'Message 1',
  //       path: '/messages/message1',
  //       icon: <IoIcons.IoIosPaper />
  //     },
  //     {
  //       title: 'Message 2',
  //       path: '/messages/message2',
  //       icon: <IoIcons.IoIosPaper />
  //     }
  //   ]
  // },
  // {
  //   title: 'Support',
  //   path: '/support',
  //   icon: <IoIcons.IoMdHelpCircle />
  // }
];