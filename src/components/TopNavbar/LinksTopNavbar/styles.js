import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Ul = styled.ul `
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  transition: 0.5s ease;  
  
   li {
    font-size: 0.9rem;
    font-weight: 400;
    padding: 20px 25px;
    line-height: 0.6;
    transition: 0.3s ease;
    &:hover {
        box-shadow: 0 -5px 0 #3dd969 inset,
        500px 0 0 rgba(255,255,255,0.03) inset;
        /* padding: 25px 25px 35px 25px; */
    }
    @media (max-width: 780px) {
    padding: 15px 10px;
    font-size: 0.7rem;
      &:hover {
        padding: 15px 10px;
        box-shadow: 0 -2px 0 #3dd969 inset,
        500px 0 0 rgba(255,255,255,0.03) inset;
      }
    }
  }
`;

export const Link = styled(NavLink)`
  color: #3dd969;
  text-decoration: none;
    .selected {
      box-shadow: 0 -5px 0 #3dd969 inset,
      500px 0 0 rgba(255,255,255,0.03) inset; 
      /* padding: 25px 25px 35px 25px; */
    }
`;