import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "./PhotoIndexItem.css";
import { useDispatch, useSelector } from "react-redux";
import { createLike, deleteLike } from "../../../store/reducers/likes_reducer";

const PhotoIndexItem = ({ photo }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (photo.liked) {
      dispatch(deleteLike({id: photo.likeId, photoId: photo.id}));
    } else {
      dispatch(createLike({ userId: sessionUser.id, photoId: photo.id }));
    }
  };

  return (
    <>
      <div className="photo-index-item">
        <Link to={`/photos/${photo.id}`}>
          <img src={photo.photoUrl} alt={photo.title} />
        </Link>
        <div className="image-overlay overlay-fade">
          <div className="overlay-text">
            <div className="overlay-text-author">
              <h1>{photo.title}</h1>
              <span>{`by ${photo.fname} ${photo.lname}`}</span>
            </div>
            <div className="overlay-like-button">
              {photo.liked ? (
                <AiFillStar className="explore-like-button" onClick={handleSubmit} fontSize={"18px"} />
              ) : (
                <AiOutlineStar className="explore-like-button" onClick={handleSubmit} fontSize={"18px"} />
              )}
              <span>{`${photo.likes}`}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoIndexItem;
