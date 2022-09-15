import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPhotos } from "../../../../store/reducers/photos_reducer";
import "./PhotostreamTab.css";

const PhotostreamTab = () => {
  const photos = useSelector(getPhotos);
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <>
      <div className="photostream-container">
        {photos &&
          sessionUser &&
          photos.map((photo) => (
            <div key={photo.id} className="photostream-photo">
              <Link to={`/photos/${photo.id}`}>
                <img
                  className="photostream-image"
                  src={photo.photoUrl}
                  alt={photo.title}
                />
              </Link>
              <div className="image-overlay photostream-overlay-fade">
                <div className="overlay-text overlay-text-padding">
                  <div className="overlay-text-author">
                    <h1>{photo.title}</h1>
                    {sessionUser.id === photo.userId ? (
                      <span>by YOU!</span>
                    ) : (
                      <span>{`by ${photo.fname} ${photo.lname}`}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default PhotostreamTab;
