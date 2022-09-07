import { Link } from "react-router-dom";
import "./PhotoIndexItem.css";

const PhotoIndexItem = ({ photo }) => {
  return (
    <>
      <Link to={`/photos/${photo.id}`}>
        <img
          className="photo-index-item"
          src={photo.photoUrl}
          alt={photo.title}
        />
      </Link>
    </>
  );
};

export default PhotoIndexItem;
