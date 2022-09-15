import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link, useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/UserNavBar";
import { fetchPhoto, getPhoto } from "../../store/reducers/photos_reducer";
import { getAuthor } from "../../store/reducers/users_reducer";
import { CgProfile } from "react-icons/cg";
import { ImArrowLeft2 } from "react-icons/im";
import { getComments } from "../../store/reducers/comments_reducer";
import CommentIndex from "../../components/Comments/CommentIndex";
import {
  createLike,
  deleteLike,
  getLike,
} from "../../store/reducers/likes_reducer";
import { formatDate } from "../../util/dateUtil";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { getTags } from "../../store/reducers/tags_reducer";
import TagIndex from "../../components/Tags/TagIndex";
import TagsForm from "../../components/Tags/TagsForm";
import "./PhotoShowPage.css";
import PopupConfirmation from "../../components/PopupConfirmation";
import PhotoEditForm from "../../components/Photos/PhotoEditForm";

const PhotoShowPage = () => {
  const { photoId } = useParams();
  useEffect(() => {
    dispatch(fetchPhoto(photoId));
  }, [photoId]);
  const dispatch = useDispatch();
  const [displayPopup, setDisplayPopup] = useState(false);
  const photo = useSelector(getPhoto(photoId));
  const user = useSelector(getAuthor);
  const comments = useSelector(getComments);
  const likes = useSelector(getLike);
  const tags = useSelector(getTags);
  const sessionUser = useSelector((state) => state.session.user);
  if (!sessionUser) return <Redirect to="/login" />;

  const hidePopup = () => {
    setDisplayPopup(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (likes.liked) {
      dispatch(deleteLike({ id: likes.id, photoId: likes.photoId }));
    } else {
      dispatch(createLike({ userId: sessionUser.id, photoId: photo.id }));
    }
  };

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
        <div className="like-delete-button">
          {likes && (
            <>
              {likes.liked ? (
                <AiFillStar
                  fontSize={"30px"}
                  color="white"
                  onClick={handleSubmit}
                />
              ) : (
                <AiOutlineStar
                  fontSize={"30px"}
                  color="white"
                  onClick={handleSubmit}
                />
              )}
            </>
          )}
          {sessionUser && user && sessionUser.id === user.id && photo && (
            <>
              <RiDeleteBin6Line
                className="delete-photo-button"
                onClick={() => setDisplayPopup(true)}
                fontSize={"30px"}
                color="white"
              />
            </>
          )}
          {displayPopup && photo && user && (
            <PopupConfirmation
              displayPopup={hidePopup}
              type={"photo"}
              photoId={photo.id}
              userId={user.id}
            />
          )}
        </div>
      </div>
      <div className="bottom-half">
        <div className="show-attributes">
          <div className="show-left-half">
            {user && (
              <div className="show-user-profile">
                <div className="profile-pic">
                  <CgProfile fontSize={"60px"} />
                </div>
                <div className="photo-details">
                  <Link
                    to={`/users/${user.id}`}
                  >{`${user.fname} ${user.lname}`}</Link>
                  {photo && sessionUser && user && (
                    <>
                      <PhotoEditForm photo={photo} />
                    </>
                  )}
                </div>
              </div>
            )}
            <div className="comment-line-separator"></div>
            {user && comments && <CommentIndex comments={comments} />}
          </div>
          <div className="show-right-half">
            <div className="photo-stats">
              <div className="photo-stats-left">
                <div className="photo-stats-views">
                  {likes && (
                    <>
                      <h1>{`${likes.count}`}</h1>
                      <span>faves</span>
                    </>
                  )}
                </div>
                <div className="photo-stats-comments">
                  {comments && (
                    <>
                      <h1>{`${comments.length}`}</h1>
                      <span>comments</span>
                    </>
                  )}
                </div>
              </div>
              <div className="photo-stats-right">
                <div className="photo-stats-date">
                  {photo && (
                    <span>Uploaded on {formatDate(photo.createdAt)}</span>
                  )}
                </div>
              </div>
            </div>
            <div className="photo-stats-separator"></div>
            <div className="tags-container">
              {sessionUser && user && photo && (
                <TagsForm
                  sessionUser={sessionUser.id}
                  photoOwner={photo.userId}
                />
              )}
              {tags && sessionUser && user && <TagIndex tags={tags} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoShowPage;
