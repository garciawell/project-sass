import { createGlobalStyle } from 'styled-components';
// import 'rc-slider/assets/index.css';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700');
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline:0;
  }

  html, body, #root{
    height:100%;
  }

  body{
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: #353940;
    font-family: 'Source Sans Pro', sans-serif;
    color:#fff;
  }

  input, button,textarea{
    font-family: 'Source Sans Pro', sans-serif;
  }
  button{
    cursor: pointer;
  }

`;

export default GlobalStyle;
