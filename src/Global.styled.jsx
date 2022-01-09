import { css, Global } from "@emotion/react";
const styles = css`
  :root {
    --main-bg-color: #161616;
    --card-bg-color: #435a4c;
    --main-txt-color: #eead71;
    --main-text-color-hover: #df730e;
    --txt-color: #9c9c9c;
    --txt-color-green: #8aa54c;
  }
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;

    background-color: var(--main-bg-color);
  }
  #root {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
  }
  main {
    flex: 2 0 100%;
  }
  body,
  p,
  h1,
  h2,
  h3 {
    margin: 0;
    padding: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  .lazy-load-image-background,
  .lazy-load-image-loaded {
    display: block !important;
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export const GlobalCSS = () => {
  return <Global styles={styles} />;
};
