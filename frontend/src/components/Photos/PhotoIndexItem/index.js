import { Link } from "react-router-dom";
import "./PhotoIndexItem.css";

const PhotoIndexItem = ({ photo }) => {
  return (
    <>
    {/* <div className="photo-index-item" >
      <Link to={`/photos/${photo.id}`}>
        <img
          className="photo-index-item"
          src={photo.photoUrl}
          alt={photo.title}
        />
      </Link>
      <div className="photo-title">
        <h2>{photo.title}</h2>
        <p>{photo.authorId}</p>
        <button>like</button>
      </div>
    </div> */}
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
