import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPhotos } from "../../../store/reducers/photos_reducer";
import PhotoIndexItem from "../PhotoIndexItem";
import "./PhotoIndex.css";

const PhotoIndex = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, [dispatch]);

  // const sessionUser = useSelector((state) => state.session.user);
  const photos = useSelector((state) => Object.values(state.entities.photos));

  return (
    <>
      <div className="photo-index">
        {photos && photos.map((photo, i) => (
          <PhotoIndexItem photo={photo} key={i} />
        ))}
      </div>
    </>
  );
};

export default PhotoIndex;
