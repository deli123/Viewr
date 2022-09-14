import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { searchPhotos } from "../../store/reducers/photos_reducer";
import "./SearchBar.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchPhotos(query))
    history.push(`/search/${query}`)
  }

  return (
    <>
      <div className="search-bar-container">
        <form onSubmit={handleSubmit}>
          <input
            className="search-bar"
            type="search"
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
      </div>
    </>
  );
};

export default SearchBar;
