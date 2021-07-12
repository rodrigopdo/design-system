import styled from 'styled-components';
// import { Link } from 'react-router-dom';


// export const Nav = styled.nav`
//   background: #424343;
//   height: 45px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   z-index: 2;
//   img {
//     width: 75px;
//   }
//   h6 {
//     color: #3DD969;
//     padding-right: 40px;
//   }
// `;

// export const NavIcon = styled(Link)`
//   margin-left: 2rem;
//   font-size: 1rem;
//   height: 40px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   transition: all 0.5s ease;
// `;

export const SidebarNav = styled.div`
  background:  #fafafa;
  border-right: 1px solid #f3f3f3; 
  width: 250px;
  height: 100vh;
  display: none;
  justify-content: center;
  position: fixed;
  top: 45px;
  padding: 40px 0 0 0;
  transition: all 0.5s ease-in-out;

  @media (max-width: 780px) {
  display: flex;
  left: ${props => props.showBar ? '0' : '-100%'};
  }
  @media (min-width: 780px) {
  display: flex;
  left: 0;
  }
  @media (min-width: 1851px) {
    left: 12%;
  }
`;

export const SidebarWrap = styled.div`
  width: 100%;
`;
