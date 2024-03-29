import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html, body {
        font-size: 10px;
        scroll-behavior: smooth;
    }
`;

export default GlobalStyles;