import { Link } from "react-router-dom";
import "./PhotoIndexItem.css";

const PhotoIndexItem = ({ photo }) => {
  return (
    <>
      <div className="photo-index-item">
        <Link to={`/photos/${photo.id}`}>
          <img src={photo.photoUrl} alt={photo.title} />
        </Link>
      </div>
    </>
  );
};

export default PhotoIndexItem;
