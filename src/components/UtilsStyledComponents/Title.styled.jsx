import PropTypes from "prop-types";
import styled from "@emotion/styled";

const TitleBase = styled.h1`
  text-transform: uppercase;
  text-align: center;
  font-size: 24px;
  line-height: 2;
  font-style: italic;

  margin-bottom: 20px;
  color: ${({ color }) => (color ? color : `var(--txt-color)`)};

  @media (min-width: 450px) {
    margin-bottom: 35px;
  }
`;

export const Title = ({ text, Atr, ...atr }) => {
  return (
    <TitleBase as={Atr} {...atr}>
      {text}
    </TitleBase>
  );
};

Title.defaultProps = {
  Atr: "h1",
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  Atr: PropTypes.string.isRequired,
};
