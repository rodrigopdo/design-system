import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100vw;
  background: #424343;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 70px;
    padding: 0 20px 0 20px;
    @media (min-width: 780px) {
      position: absolute;
      left: 20px;
      top: 10px;  
    }
  }

  h6 {
    color: #3DD969;
    padding-right: 40px;
    display: none;
    @media (min-width: 780px) {
      display: block;
    }
  }
`;

export const NavIcon = styled(Link)`
  opacity: 1;
  position: absolute;
  top: 13px;
  left: 20px;
  font-size: 1rem;
  height: 40px;
  @media (min-width: 780px) {
   opacity: 0;
  }
`;
