import styled from "styled-components";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(36, 88, 58, 0.253);

  position: absolute;
  top: 0;
  left: 0;
  z-index: 25;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const loaderStyles = css`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default function MainLoader() {
  return (
    <Overlay>
      <HashLoader
        color="#3d7a66"
        speedMultiplier="0.6"
        css={loaderStyles}
        size={150}
      />
    </Overlay>
  );
}
