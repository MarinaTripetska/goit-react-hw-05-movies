import { css } from "@emotion/react";
import styled from "@emotion/styled";
import PulseLoader from "react-spinners/PulseLoader";

const loaderStyles = css`
  display: block;
  margin: 40px;
`;

const LoaderThumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 0 15px;
`;

export default function SmallLoader() {
  return (
    <LoaderThumb>
      <PulseLoader
        color="#3d7a66"
        speedMultiplier="0.6"
        css={loaderStyles}
        size={50}
      />
    </LoaderThumb>
  );
}
