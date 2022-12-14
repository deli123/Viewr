import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createComment } from "../../../store/reducers/comments_reducer";
import { CgProfile } from "react-icons/cg";
import "./CommentsForm.css";

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
  const [showButton, setShowButton] = useState(false);

  const handleFocus = (e) => {
    e.stopPropagation();
    if (e.currentTarget === e.target) {
      setShowButton(true);
    }
  };

  const handleChange = (e) => {
    e.target.style.height = "initial";
    e.target.style.height = `${e.target.scrollHeight}px`;
    e.target.style.height = `${Math.min(e.target.scrollHeight, 300)}px`;
    setComment({ ...comment, body: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createComment(comment));
    setComment(payload);
    setShowButton(false);
  };

  document.addEventListener("click", function handleClickOutside(event) {
    const addButton = document.querySelector(".addButton");

    if (!addButton || !addButton.contains(event.target)) {
      setShowButton(false);
    }
  });

  return (
    <>
      <div className="comment-form">
        <div className="comment-author-pic">
          <CgProfile fontSize={"32px"} />
        </div>
        <form onSubmit={handleSubmit}>
          <textarea
            rows="4"
            value={comment.body}
            onChange={handleChange}
            required
            placeholder="Add a comment"
            onClick={handleFocus}
          />
          {showButton && (
            <button className="addButton comment-form-button">Comment</button>
          )}
        </form>
      </div>
    </>
  );
};

export default CommentsForm;
