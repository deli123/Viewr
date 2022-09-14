import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Redirect } from "react-router-dom";
import NavBar from "../../components/NavBar/UserNavBar";
import PhotoIndex from "../../components/Photos/PhotoIndex";
import { getPhotos, searchPhotos } from "../../store/reducers/photos_reducer";

const SearchResultsPage = () => {
  const { query } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchPhotos(query));
  }, [query]);
  const sessionUser = useSelector((state) => state.session.user);
  const searchResults = useSelector(getPhotos);
  if (!sessionUser) return <Redirect to="/login" />;

  return (
    <>
      <NavBar />
      <div className="explore-container">
        <h3>{`Search results for "${query}"`}</h3>
        {sessionUser && searchResults && (
          <PhotoIndex searchResults={searchResults} />
        )}
      </div>
    </>
  );
};

export default SearchResultsPage;
