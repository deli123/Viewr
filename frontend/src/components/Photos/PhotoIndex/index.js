import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchPhotos,
  getPhotos,
  searchPhotos,
} from "../../../store/reducers/photos_reducer";
import PhotoIndexItem from "../PhotoIndexItem";
import "./PhotoIndex.css";

const PhotoIndex = ({ searchResults }) => {
  const dispatch = useDispatch();
  const { query } = useParams();
  let photos;

  useEffect(() => {
    if (query) {
      dispatch(searchPhotos(query));
    } else if (!(searchResults.length > 0)) {
      dispatch(fetchPhotos());
    }
  }, [query, searchResults.length]);

  photos = useSelector((state) =>
    query
      ? getPhotos(state)
      : searchResults.length > 0
      ? searchResults
      : getPhotos(state)
  );

  return (
    <>
      <div className="photo-index">
        {photos &&
          photos.map((photo) => (
            <PhotoIndexItem photo={photo} key={photo.id} />
          ))}
      </div>
    </>
  );
};

export default PhotoIndex;
