import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPhotos, getPhotos } from "../../../store/reducers/photos_reducer";
import PhotoIndexItem from "../PhotoIndexItem";
import "./PhotoIndex.css";

const PhotoIndex = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  const photos = useSelector(getPhotos);

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
