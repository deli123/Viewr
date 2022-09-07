import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPhotos } from "../../store/reducers/photos_reducer";

const PhotoIndex = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotos());
  }, []);

  const sessionUser = useSelector((state) => state.session.user);
  const photos = useSelector((state) => Object.values(state.entities.photos));

  return (
    <>

    </>
  )
};

export default PhotoIndex;
