import styled from 'styled-components';

export const Menu = styled.ul`
  width: 100%;
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 30px;
  padding: 0;
  h5 {
    padding: 0 0 0 25px;
    letter-spacing: 4px;
  }
`;

// export const HeaderMenu = styled.div`
//   display: flex;
//   justify-content: space-between;
//   padding-left: 25px;
//   font-size: 0.7rem;
//   font-weight: 500;
// `;

export const MenuItems = styled.li`
  padding-left: 30px;
  font-size: 0.7rem;
  display: ${props=> props.show ? 'block' : 'none'};
  a {
    color: #595958;
    display: block;
  }
  a.active {
  font-weight: 700;
  }
  &:hover {
    border-right: 3px solid #04AA6D;
    background-color: #E6E6E6;
  }
`;
