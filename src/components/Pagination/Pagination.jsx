import PropTypes from "prop-types";

export default function Pagination({ page, setPage, isLastPage }) {
  return (
    <div>
      <button
        type="button"
        aria-label="Previous page"
        onClick={() => setPage(-1)}
        disabled={page === 1}
      >
        Prev
      </button>

      <p>{page}</p>

      <button
        type="button"
        aria-label="Next page"
        onClick={() => setPage(1)}
        disabled={isLastPage}
      >
        Next
      </button>
    </div>
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
