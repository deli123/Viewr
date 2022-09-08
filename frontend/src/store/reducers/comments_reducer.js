import csrfFetch from "../csrf";
import { RECEIVE_PHOTO } from "./photos_reducer";

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";

// ACTIONS
export const receiveComments = (comments) => {
  return {
    type: RECEIVE_COMMENTS,
    comments,
  };
};

export const receiveComment = (comment) => {
  return {
    type: RECEIVE_COMMENT,
    comment,
  };
};

// SELECTORS
export const getComments = (state) => {
  if (state.entities.comments) return Object.values(state.entities.comments);
  return [];
};
export const getComment = (commentId) => (state) => {
  if (state.entities.comments) return state.entities.comments[commentId];
  return null;
};

// THUNK ACTION CREATORS
export const fetchComments = () => async (dispatch) => {
  const res = await fetch(`/api/comments`);

  if (res.ok) {
    const comments = await res.json();
    dispatch(receiveComments(comments));
  }
};

export const fetchComment = (commentId) => async (dispatch) => {
  const res = await fetch(`/api/comments/${commentId}`);

  if (res.ok) {
    const comment = await res.json();
    dispatch(receiveComment(comment));
  }
};

export const createComment = (commentData) => async (dispatch) => {
  console.log(commentData)
  const res = await csrfFetch(`/api/comments`, {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(commentData)
  });

  if (res.ok) {
    const comment = await res.json();
    dispatch(receiveComment(comment));
  }
};

const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = { ...state };

  switch (action.type) {
    case RECEIVE_COMMENTS:
      return { ...nextState, ...action.comments };
    case RECEIVE_COMMENT:
      nextState[action.comment.comment.id] = action.comment.comment;
      return nextState;
    case RECEIVE_PHOTO:
      return action.photo.comments;
    default:
      return nextState;
  }
};

export default commentsReducer;
