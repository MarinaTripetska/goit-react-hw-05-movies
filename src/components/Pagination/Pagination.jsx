import PropTypes from "prop-types";
import { Container, Button, PageNum } from "./Pagination.styled";
import { ImArrowLeft2, ImArrowRight2 } from "react-icons/im";
export default function Pagination({ page, setPage, isLastPage }) {
  return (
    <Container>
      <Button
        type="button"
        aria-label="Previous page"
        onClick={() => setPage(-1)}
        disabled={page === 1}
      >
        <ImArrowLeft2 />
      </Button>

      <PageNum>{page}</PageNum>

      <Button
        type="button"
        aria-label="Next page"
        onClick={() => setPage(1)}
        disabled={isLastPage}
      >
        <ImArrowRight2 />
      </Button>
    </Container>
  );
}

Pagination.defaultProps = {
  page: 1,
};

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  isLastPage: PropTypes.bool,
};
