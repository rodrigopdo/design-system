import styled from "styled-components";

export const SideBarContainer = styled.nav`
  background-color: #f6f6f4;
  height: 100vh;
  width: 180px;
  overflow-y: auto;
  /* display: flex;
  justify-content: start; */
  position: fixed;
  top: 30px;
  left: ${props => props.position ? 0 : '-100%'};
  padding: 40px 0px;
  transition: all 0.5s ease;
`; 

export const Menu = styled.ul`
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 30px;
  width: 100%;
  padding: 0;
`;

export const HeaderMenu = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 25px;
  font-size: 0.7rem;
  font-weight: 500;
`;

export const MenuItems = styled.li`
  padding-left: 30px;
  font-size: 0.7rem;
  a {
    color: #333333;
    display: block;
   
  }
  a.active {
  font-weight: 700;
  }
  &:hover {
    border-right: 3px solid #04AA6D;
    background-color: #E6E6E6;
    font-weight: 600;
  }
`;

export const BurgerBtn = styled.div`
  position: fixed;
  top: 50px;
  margin-left: 20px;
  z-index: 1;
  
`;