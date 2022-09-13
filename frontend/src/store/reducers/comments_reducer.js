import csrfFetch from "../csrf";
import { RECEIVE_PHOTO } from "./photos_reducer";

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

// ACTIONS
const receiveComments = (comments) => {
  return {
    type: RECEIVE_COMMENTS,
    comments,
  };
};

const receiveComment = (comment) => {
  return {
    type: RECEIVE_COMMENT,
    comment,
  };
};

const removeComment = (commentId) => ({
  type: REMOVE_COMMENT,
  commentId,
});

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
export const createComment = (commentData) => async (dispatch) => {
  const res = await csrfFetch(`/api/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Accept': "application/json",
    },
    body: JSON.stringify({ comment: commentData }),
  });

  if (res.ok) {
    const comment = await res.json();
    dispatch(receiveComment(comment));
  }
};

export const editComment = (commentData) => async (dispatch) => {
  const res = await csrfFetch(`/api/comments/${commentData.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      'Accept': "application/json",
    },
    body: JSON.stringify({ comment: commentData }),
  });

  if (res.ok) {
    const comment = await res.json();
    dispatch(receiveComment(comment));
  }
};

export const deleteComment = (commentId) => async (dispatch) => {
  const res = await csrfFetch(`/api/comments/${commentId}`, {
    method: "DELETE",
  });

  if (res.ok) {
    dispatch(removeComment(commentId));
    return res;
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
    case REMOVE_COMMENT:
      delete nextState[action.commentId];
      return nextState;
    case RECEIVE_PHOTO:
      if (action.photo.comments) {
        return action.photo.comments;
      } else {
        return null;
      }        
      default:
      return nextState;
  }
};

export default commentsReducer;
