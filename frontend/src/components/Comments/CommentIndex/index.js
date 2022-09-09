import CommentsForm from "../CommentsForm";
import CommentIndexItem from "../CommentIndexItem";
import "./CommentIndex.css";

const CommentIndex = ({ comments }) => {
  return (
    <>
      <div className="comments-container">
        {comments.map((comment) => (
          <CommentIndexItem key={comment.id} comment={comment} />
        ))}
        <CommentsForm />
      </div>
    </>
  );
};

export default CommentIndex;
