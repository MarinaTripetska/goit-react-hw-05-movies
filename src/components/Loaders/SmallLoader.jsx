import { css } from "@emotion/react";
import PulseLoader from "react-spinners/PulseLoader";
import s from "./Loaders.module.css";
import { MainContainer } from "../UtilsStyledComponents";
const loaderStyles = css`
  display: block;
  margin: 40px;
`;

export default function SmallLoader() {
  return (
    <MainContainer className={s.smallLoaderThumb}>
      <PulseLoader
        color="#3d7a66"
        speedMultiplier="0.6"
        css={loaderStyles}
        size={50}
      />
    </MainContainer>
  );
}
