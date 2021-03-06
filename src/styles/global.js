import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: #f5f5f5;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: #333;
  }
`; 