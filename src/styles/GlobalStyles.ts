import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  :root {
    --background-color: #E5E5E5;
    --primary-color: #41414C;
    --secondary-color: #F1972C;
    --text-green: #36B336;
    --text-red: #EB3B35;
    --text-primary: #5A5A66;
    --text-seconday: #787880;
    --text-complementary: #BFBFCC;
    --button-new-job-hover: #FA9C2D;
    --button-save-job-hover: #3CC73C;
    --button-delete-job-hover: #FA3F38;
    --button-cancel: #E1E3E5;
    --button-cancel-hover: #ECEEF0;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background-color: var(--background-color);
  }

  a {
    text-decoration: none;
    color: #333;
  }

  button {
    cursor: pointer;
  }

  h1, h2 {
    font-weight: 700;
  }

  h3, h4 {
    font-weight: 500;
  }

  h5, a, span, p {
    font-weight: 300;
  }
`;
