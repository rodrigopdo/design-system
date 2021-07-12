import React from 'react'
import { Ul, Link } from './styles';

const LinkTopNavbar = () => {
  return (
    <div>
      <Ul>
        <Link activeClassName="selected" to='/' to="#">
          <li>Core</li>
        </Link>
        <Link activeClassName="selected" to='' to="#">
          <li>Web</li>
        </Link>
        <Link activeClassName="selected" to='#' to="#">
          <li>Native</li>
        </Link>
        {/* <li >
          <Link to='#'>Web</Link>
        </li>
        <li >
          <Link to='#'>Native</Link>
        </li> */}
      </Ul>
    </div>
  )
}

export default LinkTopNavbar;
