import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;  
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
  overflow-x: hidden;
}
ul, ol, li a {
  list-style: none;
  text-decoration: none;
  cursor: pointer;
}
ul {
  padding-inline-start: 20px;
}
h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
}
a {
  outline: none;
  cursor: pointer;
}
a:active {
  color: #000;
}
input {
  border:none;
  background-image:none;
  background-color:transparent;
  box-shadow: none;
}
select,
button,
input,
input[type=email], 
input[type=number],
input[type=text]   {
  outline:none;
  background-color: transparent;
} 
input::placeholder {
  text-transform: none;
}
input[type=email] {
  text-transform: none; 
}
button,
select {
  background: none;
  border: 0;
  color: inherit;
  font: inherit;
  line-height: normal;
  overflow: visible;
  padding: 0;
  cursor: pointer;
}

`;

export default GlobalStyles;