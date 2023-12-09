import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPhotos } from "../../../../store/reducers/photos_reducer";
import { useState } from "react";
import FadeLoader from "react-spinners/FadeLoader";
import "./PhotostreamTab.css";

const PhotostreamTab = () => {
  const photos = useSelector(getPhotos);
  const sessionUser = useSelector((state) => state.session.user);
  const [loading, setLoading] = useState(true);

  const cssOverride = {
    position: "absolute",
    top: "50%",
    left: "50%"
  };

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
                  onLoad={(e) => setLoading(false)}
                />
              </Link>
              <FadeLoader
                loading={loading}
                cssOverride={cssOverride}
                color="#605F5E"
                height={8}
                margin={-7}
                radius={1}
                speedMultiplier={1}
                width={3}
              />
              <div className="image-overlay overlay-fade">
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
