import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #282828;
  }

  * {
    padding: 0;
    margin: 0;
    vertical-align: baseline;
    list-style: none;
    border: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
  }
  
  .container {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    min-height: 100vh;
  }

  .main-wrapper {
    display: flex;
    flex-direction: column;
    width: 600px;
  }

  .logo-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .logo {
    width: 100px;
  }

  .logo img {
    width: 100%;
  }

  .title {
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    font-weight: 900;
    color: var(--color-primary);
  }

  .logo-text {
    font-size: 30px;
  }

  @media only screen and (max-width: 600px) {
    .main-wrapper {
      width: 100%;
      padding: 10px;
    }
  }

`;

export default GlobalStyle;
