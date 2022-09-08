import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/UserNavBar";
import { fetchPhoto, getPhoto } from "../../store/reducers/photos_reducer";
import { useEffect } from "react";
import PhotoDetails from "../../components/Photos/PhotoDetails";
import { getUser } from "../../store/reducers/users_reducer";
import { CgProfile } from "react-icons/cg";
import "./PhotoShowPage.css";

const PhotoShowPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhoto(id));
  }, [id]);

  const photo = useSelector(getPhoto(id));
  // console.log(photo)
  // console.log(photo.userId)
  const user = useSelector(getUser(photo.userId));

  // const user = useSelector(state => state.entities.users[photo.userId]);

  return (
    <>
      {/* {console.log(user)} */}
      <NavBar />
      <div className="show-container">
        {photo && <img src={photo.photoUrl} alt={photo.title} />}
      </div>
      <div className="show-attributes">
        <div className="show-left-half">
          {photo && <PhotoDetails photo={photo} />}
        </div>
        <div className="comments-container">Comments here</div>
      </div>
    </>
  );
};

export default PhotoShowPage;
