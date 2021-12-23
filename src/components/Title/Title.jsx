import PropTypes from "prop-types";

export default function Title({ text, Atr }) {
  return <Atr> {text}</Atr>;
}
Title.propTypes = {
  text: PropTypes.string.isRequired,
  Atr: PropTypes.string.isRequired,
};
