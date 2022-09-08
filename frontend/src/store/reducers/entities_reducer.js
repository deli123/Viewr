import { combineReducers } from "redux";
import photos from "./photos_reducer";
import users from "./users_reducer";

export default combineReducers({
  photos,
  users,
});
