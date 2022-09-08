import "./CommentIndexItem.css";

const CommentIndexItem = ({ comment }) => {
  return (
    <>
      <div className="comment">
        <h1>{`${comment.fname} ${comment.lname}`}</h1>
        <p>{comment.body}</p>
      </div>
    </>
  );
};

export default CommentIndexItem;
