import { useDispatch, useSelector } from "react-redux";
import { deleteComment } from "../../../store/reducers/comments_reducer";
import "./CommentIndexItem.css";

const CommentIndexItem = ({ comment }) => {
  const sessionUserId = useSelector((state) => state.session.user.id);
  const dispatch = useDispatch();

  return (
    <>
      <div className="comment">
        <h1>{`${comment.fname} ${comment.lname}`}</h1>
        <p>{comment.body}</p>
        {sessionUserId === comment.authorId && 
          <>
            <button>Edit</button>
            <button onClick={() => dispatch(deleteComment(comment.id))}>
              Delete
            </button>
          </>
        }
      </div>
    </>
  );
};

export default CommentIndexItem;
