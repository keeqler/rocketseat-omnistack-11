import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  :root {
    --primary: #E02041;
    --title-primary: #13131A;
    --title-secondary: #41414D;
    --text-primary: #737380;
    --text-secondary: #A8A8B3;
    --input: #FFFFFF;
    --input-border: #DCDCE6;
    --background: #F0F0F5;
  }

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    border: none;
    font-family: Roboto, sans-serif;
    background: none;
  }

  body {
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    color: var(--text-primary);
    background: var(--background);
  }

  #root {
    width: 100%;
    max-width: 1136px;
    min-height: 100vh;
    margin: auto;
    padding: 0 20px;
    display: flex;
  }

  h1 {
    font-size: 36px;
    color: var(--title-primary);
  }
`;
