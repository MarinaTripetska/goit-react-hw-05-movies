import { useState } from "react";
import PropTypes from "prop-types";
import { Background, Form, Button, Input } from "./SearchForm.styled";
import { ImSearch } from "react-icons/im";
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
    <Background>
      <Form onSubmit={handleSubmit}>
        <Button type="submit" title="Search images. Click for find movies">
          <ImSearch />
        </Button>

        <Input
          type="text"
          autoComplete="off"
          placeholder="Search movies"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Form>
    </Background>
  );
}

SearchForm.propTypes = {
  fetchFoo: PropTypes.func.isRequired,
};
