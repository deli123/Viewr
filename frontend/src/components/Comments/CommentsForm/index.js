import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createComment } from "../../../store/reducers/comments_reducer";
import { getAuthor } from "../../../store/reducers/users_reducer";

const CommentsForm = ({photoId}) => {
  const dispatch = useDispatch();
  const user = useSelector(getAuthor);

  const payload = {
    body: "",
    authorId: user.id,
    photoId,
  };

  const [comment, setComment] = useState(payload);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createComment(comment));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="textarea"
          onChange={(e) => setComment({...comment, body: e.currentTarget.value})}
        />
        <button>Add Comment</button>
      </form>
    </>
  );
};

export default CommentsForm;
