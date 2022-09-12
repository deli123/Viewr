import csrfFetch from "../csrf";
import { RECEIVE_PHOTO } from "./photos_reducer";

export const RECEIVE_LIKES = "RECEIVE_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

// ACTIONS
const receiveLikes = (likes) => {
  return {
    type: RECEIVE_LIKES,
    likes,
  };
};

const receiveLike = (like) => {
  return {
    type: RECEIVE_LIKE,
    like,
  };
};

const removeLike = (like) => ({
  type: REMOVE_LIKE,
  like,
});

// SELECTORS
export const getLike = (state) => {
  if (state.entities.likes) return state.entities.likes;
  return [];
};

// THUNK ACTION CREATORS
export const fetchLikes = () => async (dispatch) => {
  const res = await fetch(`/api/likes`);

  if (res.ok) {
    const likes = await res.json();
    dispatch(receiveLikes(likes));
  }
};

export const fetchLike = (likeId) => async (dispatch) => {
  const res = await fetch(`/api/likes/${likeId}`);

  if (res.ok) {
    const like = await res.json();
    dispatch(receiveLike(like));
  }
};

export const createLike = (likeData) => async (dispatch) => {
  const res = await csrfFetch(`/api/likes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ like: likeData }),
  });

  if (res.ok) {
    const like = await res.json();
    dispatch(receiveLike(like));
  }
};

export const deleteLike = (like) => async (dispatch) => {
  const res = await csrfFetch(`/api/likes/${like.id}`, {
    method: "DELETE",
  });

  if (res.ok) {
    dispatch(removeLike(like));
    return res;
  }
};

const likesReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = { ...state };
  switch (action.type) {
    case RECEIVE_LIKES:
      return { ...nextState, ...action.likes };
    case RECEIVE_LIKE:
      nextState.id = action.like.like.id
      nextState.count += 1;
      nextState.liked = true;
      return nextState;
    case REMOVE_LIKE:
      delete nextState.id;
      nextState.count -= 1;
      nextState.liked = false;
      return nextState;
    case RECEIVE_PHOTO:
      return action.photo.likes;
    default:
      return nextState;
  }
};

export default likesReducer;
