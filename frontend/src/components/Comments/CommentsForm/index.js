import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createComment } from "../../../store/reducers/comments_reducer";

const CommentsForm = () => {
  const { photoId } = useParams();
  const dispatch = useDispatch();
  const authorId = useSelector((state) => state.session.user.id);

  const payload = {
    body: "",
    authorId,
    photoId,
  };

  const [comment, setComment] = useState(payload);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createComment(comment));
    setComment(payload);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="textarea"
          value={comment.body}
          onChange={(e) =>
            setComment({ ...comment, body: e.target.value })
          }
          required
        />
        <button>Add Comment</button>
      </form>
    </>
  );
};

export default CommentsForm;
