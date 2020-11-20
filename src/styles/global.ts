import { createGlobalStyle } from 'styled-components';
import 'normalize.css';
import 'fontsource-noto-sans-jp/500-normal.css';

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`;

export default GlobalStyles;
