import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/UserNavBar";
import { fetchPhoto, getPhoto } from "../../store/reducers/photos_reducer";
import { getAuthor } from "../../store/reducers/users_reducer";
import { CgProfile } from "react-icons/cg";
import { ImArrowLeft2 } from "react-icons/im";
import { getComments } from "../../store/reducers/comments_reducer";
import "./PhotoShowPage.css";
import CommentIndex from "../../components/Comments/CommentIndex";

const PhotoShowPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const photo = useSelector(getPhoto(id));
  const user = useSelector(getAuthor);
  const comments = useSelector(getComments);

  useEffect(() => {
    dispatch(fetchPhoto(id));
  }, [id]);

  return (
    <>
      <NavBar />
      <div className="show-container">
        <div className="link-explore"><Link to="/explore"><ImArrowLeft2 className="left-arrow"/>Back to explore</Link></div>
        {photo && <img src={photo.photoUrl} alt={photo.title} />}
      </div>
      <div className="show-attributes">
        <div className="show-left-half">
          {user && (
            <div className="show-user-profile">
              <CgProfile fontSize={"60px"} />
              <Link to="#">{`${user.fname} ${user.lname}`}</Link>
              <h1>{photo.title}</h1>
            </div>
          )}
          {photo && (
            <div className="photo-details">
              <p>{photo.description}</p>
            </div>
          )}
          {user && comments && <CommentIndex comments={comments} photoId={photo.id}/>}
        </div>
      </div>
    </>
  );
};

export default PhotoShowPage;
