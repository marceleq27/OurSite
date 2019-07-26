import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700,900&display=swap&subset=latin-ext');
    *,*::before,*::after
    {
        box-sizing:border-box;
        margin:0;
        padding:0;
        -webkit-font-smoothing: antialiased;
         -moz-osx-font-smoothing: grayscale;
    }
    body{
        font-family:'Montserrat',sans-serif;
        height:1000vh;
    }
`;

export default GlobalStyle;
