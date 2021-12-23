import { useState } from "react";
import PropTypes from "prop-types";
export default function SearchForm({ fetchFoo }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim() === "") {
      window.alert("Please, provide search movie!");
      setQuery("");
      return;
    }

    fetchFoo(query.toLowerCase().trim());
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit" aria-label="Search images">
        <span>Search</span>
      </button>

      <input
        type="text"
        autoComplete="off"
        placeholder="Search movies"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

SearchForm.propTypes = {
  fetchFoo: PropTypes.func.isRequired,
};
