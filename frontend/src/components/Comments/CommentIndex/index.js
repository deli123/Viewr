import CommentsForm from "../CommentsForm";
import CommentIndexItem from "../CommentIndexItem";
import "./CommentIndex.css"

const CommentIndex = ({ comments, photoId }) => {
  return (
    <>
      <div className="comments-container">
        {comments.map((comment) => (
          <CommentIndexItem comment={comment} />
        ))}
        <CommentsForm photoId={photoId}/>
      </div>
    </>
  );
};

export default CommentIndex;
