import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
  background: #424343;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;

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
  }
`;

export const NavIcon = styled(Link)`
  opacity: 1;
  margin-left: 2rem;
  font-size: 1rem;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: all 0.5s ease;
  @media (min-width: 780px) {
   opacity: 0;
  }
`;
