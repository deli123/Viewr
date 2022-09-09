import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link, useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/UserNavBar";
import { fetchPhoto, getPhoto } from "../../store/reducers/photos_reducer";
import { getAuthor } from "../../store/reducers/users_reducer";
import { CgProfile } from "react-icons/cg";
import { ImArrowLeft2 } from "react-icons/im";
import { getComments } from "../../store/reducers/comments_reducer";
import "./PhotoShowPage.css";
import CommentIndex from "../../components/Comments/CommentIndex";

const PhotoShowPage = () => {
  const { photoId } = useParams();
  useEffect(() => {
    dispatch(fetchPhoto(photoId));
  }, [photoId]);
  const dispatch = useDispatch();
  const photo = useSelector(getPhoto(photoId));
  const user = useSelector(getAuthor);
  const comments = useSelector(getComments);
  const sessionUser = useSelector((state) => state.session.user);
  if (!sessionUser) return <Redirect to="/login" />;

  return (
    <>
      <NavBar />
      <div className="show-container">
        <div className="link-explore">
          <Link to="/explore">
            <ImArrowLeft2 className="left-arrow" />
            Back to explore
          </Link>
        </div>
        {photo && <img src={photo.photoUrl} alt={photo.title} />}
      </div>
      <div className="show-attributes">
        <div className="show-left-half">
          {user && (
            <div className="show-user-profile">
              <div className="profile-pic">
                <CgProfile fontSize={"60px"} />
              </div>
              <div className="photo-details">
                <Link to="#">{`${user.fname} ${user.lname}`}</Link>
                <h1>{photo.title}</h1>
                <p>{photo.description}</p>
              </div>
            </div>
          )}
          <div className="comment-line-separator"></div>
          {user && comments && <CommentIndex comments={comments} />}
        </div>
      </div>
    </>
  );
};

export default PhotoShowPage;
