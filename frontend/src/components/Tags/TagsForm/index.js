import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { createTag } from "../../../store/reducers/tags_reducer";
import "./TagsForm.css";

const TagsForm = ({ sessionUser, photoOwner }) => {
  const { photoId } = useParams();
  const dispatch = useDispatch();
  const isOwner = sessionUser === photoOwner ? true : false;

  const [showForm, setShowForm] = useState(false);
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowForm(true);
    if (body.length > 0) dispatch(createTag({ body, photoId }));
    setBody("");
  };

  return (
    <>
      <div className="tags-form">
        <div className="tags-form-header">
          <h1>Tags</h1>
          {isOwner && <button onClick={handleSubmit}>Add tags</button>}
        </div>
        {showForm && (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Add a tag"
            />
          </form>
        )}
      </div>
    </>
  );
};

export default TagsForm;
