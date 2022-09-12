import { combineReducers } from "redux";
import photos from "./photos_reducer";
import users from "./users_reducer";
import comments from "./comments_reducer";
import likes from "./likes_reducer";
import tags from "./tags_reducer";

export default combineReducers({
  photos,
  users,
  comments,
  likes,
  tags
});
