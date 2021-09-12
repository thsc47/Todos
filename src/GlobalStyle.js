import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
       box-sizing: border-box;
       font-family:"Montserrat", sans-serif;
       margin: 0;
       padding: 0;
       font-size: 16px;
       text-decoration: none; 
    }
    
    textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
}
`;

export default GlobalStyle;
