import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/UserNavBar";
import { fetchPhoto, getPhoto } from "../../store/reducers/photos_reducer";
import { useEffect } from "react";
import "./PhotoShowPage.css";

const PhotoShowPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhoto(id));
  }, [id]);

  const photo = useSelector(getPhoto(id));

  return (
    <>
      <NavBar />
      <div className="show-container">
        {photo && <img src={photo.photoUrl} />}
      </div>
    </>
  );
};

export default PhotoShowPage;
