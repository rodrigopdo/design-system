import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #424343;
  position: fixed;  
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  /* border-bottom: 1px solid #dedddc; */
  z-index: 2;
  h6 {
    padding-right: 40px;
    color: #3DD969;
    font-weight: 500;
  }
`;

export const Logo = styled.a`
  img {
    width: 80px;
    padding-left: 40px;
  ;
  }
`;