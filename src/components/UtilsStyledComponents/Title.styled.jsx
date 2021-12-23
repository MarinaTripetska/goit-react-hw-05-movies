import PropTypes from "prop-types";
import styled from "@emotion/styled";

const TitleBase = styled.h1`
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 35px;
`;

export const Title = ({ text, Atr }) => {
  return <TitleBase as={Atr}>{text}</TitleBase>;
};

Title.defaultProps = {
  Atr: "h1",
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  Atr: PropTypes.string.isRequired,
};
