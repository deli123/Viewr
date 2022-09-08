import { useSelector } from "react-redux";
import { CgProfile } from "react-icons/cg";
import { getUser } from "../../../store/reducers/users_reducer";
import "./PhotoDetails.css";

const PhotoDetails = ({ photo }) => {
  const user = useSelector(getUser(photo.userId));

  return (
    <>
      <div className="show-user-profile">
        <CgProfile fontSize={"60px"} />
        <h1>{`${user.fname} ${user.lname}`}</h1>
        <div className="show-caption">
          <h1>{photo.title}Title</h1>
          <p>{photo.description}Description</p>
        </div>
      </div>
    </>
  );
};

export default PhotoDetails;
