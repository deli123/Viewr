import { RECEIVE_PHOTO } from "./photos_reducer";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

// ACTIONS
export const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users,
  };
};

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user,
  };
};

// SELECTORS
export const getUsers = (state) => {
  if (state.entities.users) return Object.values(state.entities.users);
  return [];
};

export const getUser = (userId) => (state) => {
  if (state.entities.users) return state.entities.users[userId];
  return null;
};

export const getAuthor = (state) => {
  if (state.entities.users) return Object.values(state.entities.users)[0];
  return null;
};

// THUNK ACTION CREATORS
export const fetchUsers = () => async (dispatch) => {
  const res = await fetch(`/api/users`);

  if (res.ok) {
    const users = await res.json();
    dispatch(receiveUsers(users));
  }
};

export const fetchUser = (userId) => async (dispatch) => {
  const res = await fetch(`/api/users/${userId}`);

  if (res.ok) {
    const user = await res.json();
    dispatch(receiveUser(user));
  }
};

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = { ...state };

  switch (action.type) {
    case RECEIVE_USERS:
      return { ...nextState, ...action.users };
    case RECEIVE_USER:
      nextState[action.user.user.id] = action.user.user;
      return nextState;
    case RECEIVE_PHOTO:
      const id = action.photo.user.id;
      return { [id]: action.photo.user };
    default:
      return nextState;
  }
};

export default usersReducer;
