import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        box-sizing:border-box;
        outline:0;
    }

    :root{
    --purple:  #403CAA;
    --lightpurple:  rgba(64, 60, 170, 0.1);
    --green: #11995E;
    --lightgreen: rgba(17, 153, 94, 0.1);
    --grey100: #333333;
    --grey50: #999999;
    --grey0: #F5F5F5;
    --white: #FFFFFF;
    --red: #FF0000;
    }

    h1{
        font-weight: bold;
        font-size: 32px;
    }

    h2{
        font-weight: bold;
        font-size: 28px;
    }

    h3{
        font-weight: bold;
        font-size: 22px;

    }

    h4{
        font-weight: bold;
        font-size: 18px;
    }

    button{
        cursor: pointer;
    }

    a{
        text-decoration:none;
    }
`;

export default GlobalStyle;
