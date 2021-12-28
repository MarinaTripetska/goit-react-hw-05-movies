import { css, Global } from "@emotion/react";
const styles = css`
  :root {
    --main-bg-color: #161616;
    --card-bg-color: #435a4c;
    --main-txt-color: #eead71;
    --main-text-color-hover: #df730e;
    --txt-color: #9c9c9c;
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
  .mainContent {
    min-height: calc(100vh - 145px);
  }
  .lazy-load-image-background,
  .lazy-load-image-loaded {
    display: block !important;
  }
`;

export const GlobalCSS = () => {
  return <Global styles={styles} />;
};
