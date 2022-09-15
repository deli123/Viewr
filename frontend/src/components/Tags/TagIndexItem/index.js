import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPhoto } from "../../../store/reducers/photos_reducer";
import { IoClose } from "react-icons/io5";
import "./TagIndexItem.css";
import { deleteTag } from "../../../store/reducers/tags_reducer";

const TagIndexItem = ({ tag }) => {
  const { photoId } = useParams();
  const dispatch = useDispatch();
  const photo = useSelector(getPhoto(photoId));
  const sessionUser = useSelector((state) => state.session.user.id);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(deleteTag(tag.id));
  };

  return (
    <>
      <div className="tag-index-item">
        {tag.body}
        {sessionUser && photo && sessionUser === photo.userId && (
          <div className="remove-tag-overlay overlay-fade-tag">
            <div className="remove-tag">
              <IoClose onClick={handleSubmit} color="white" fontSize={"24px"} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TagIndexItem;
