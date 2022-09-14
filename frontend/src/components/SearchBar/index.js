import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SearchBar.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${query}`);
  };

  return (
    <>
      <div className="search-bar-container">
        <form onSubmit={handleSubmit}>
          <input
            className="search-bar"
            type="search"
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Search by tags`}
          />
        </form>
      </div>
    </>
  );
};

export default SearchBar;
