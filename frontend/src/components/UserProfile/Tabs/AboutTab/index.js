import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser, getAuthor } from "../../../../store/reducers/users_reducer";
import { RiPencilFill } from "react-icons/ri";
import "./AboutTab.css";

const AboutTab = () => {
  const user = useSelector(getAuthor);
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const [about, setAbout] = useState(user.about ? user.about : "");
  const [showForm, setShowForm] = useState(false);
  const [showEditButton, setShowEditButton] = useState(true);
  let updateUser = { ...user };

  const handleChange = (e) => {
    e.target.style.height = "initial";
    e.target.style.height = `${e.target.scrollHeight}px`;
    setAbout(e.target.value);
  };

  const handleEditButton = (e) => {
    e.preventDefault();
    setShowEditButton(false);
    setShowForm(true);
  };

  const handleCancelButton = (e) => {
    e.preventDefault();
    setShowEditButton(true);
    setShowForm(false);
  };

  // only dispatch a request if the input is valid
  // an input is valid if it is completely empty or contains at least 1 char
  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser = { ...updateUser, about };
    if (about.length === 0 || about.trim().length >= 1) {
      dispatch(editUser(updateUser));
    } else {
      setAbout(sessionUser.about);
    }
    setShowEditButton(true);
    setShowForm(false);
  };

  return (
    <>
      <div className="about-container">
        {user &&
          sessionUser &&
          !showForm &&
          (user.about ? (
            <p className="about-text">{user.about}</p>
          ) : sessionUser.id === user.id ? (
            <p className="about-placeholder">Write a little about yourself</p>
          ) : (
            <p className="about-placeholder">
              This person hasn't written anything yet
            </p>
          ))}
        {sessionUser && user && sessionUser.id === user.id && showEditButton && (
          <button className="about-edit-button" onClick={handleEditButton}>
            <RiPencilFill color="#999" fontSize={"20px"} />
          </button>
        )}
        {showForm && (
          <>
            <form className="about-form" onSubmit={handleSubmit}>
              <textarea
                required
                className="about-textarea"
                rows="8"
                value={about}
                onChange={handleChange}
              />
              <div className="popup-buttons about-buttons">
                <button className="comment-form-button" onClick={handleSubmit}>
                  Save
                </button>
                <button
                  onClick={handleCancelButton}
                  className="comment-form-button about-cancel"
                >
                  Cancel
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default AboutTab;
