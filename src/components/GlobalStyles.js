import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    h2 {
        font-size: 2rem;
        font-weight: 600;
    }
    h4 {
        font-size: 1.3rem;
        color: #0c0d0e;
        padding: 1.5rem 0rem;
    }
    p {
        font-size: 1.2rem;
        line-height: 200%;
    }
    a {
        color: #000000;
        text-decoration: none !important;
    }
    .fa {
        font-size: 21px;
    }
    .navbar a {
        color: #fff !important;
    }
   .center-div {
    position: absolute;
    margin: auto;
    top: 0;
    right: 20%;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 100px;
    border-radius: 3px;
   }
    
   @media only screen and (max-width: 420px) {
    .center-div {
        right: 0%
    }
}
    
`;

export default GlobalStyles;
