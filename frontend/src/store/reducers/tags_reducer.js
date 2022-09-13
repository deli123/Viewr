import csrfFetch from "../csrf";
import { RECEIVE_PHOTO } from "./photos_reducer";

export const RECEIVE_TAG = "RECEIVE_TAG";
export const REMOVE_TAG = "REMOVE_TAG";

// ACTIONS
const receiveTag = (tag) => {
  return {
    type: RECEIVE_TAG,
    tag,
  };
};

const removeTag = (tagId) => ({
  type: REMOVE_TAG,
  tagId,
});

// SELECTORS
export const getTags = (state) => {
  if (state.entities.tags) return Object.values(state.entities.tags);
  return [];
};

// THUNK ACTION CREATORS
export const createTag = (tagData) => async (dispatch) => {
  const res = await csrfFetch(`/api/tags`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({ tag: tagData }),
  });

  if (res.ok) {
    const tag = await res.json();
    dispatch(receiveTag(tag));
  }
};

export const deleteTag = (tagId) => async (dispatch) => {
  const res = await csrfFetch(`/api/tags/${tagId}`, {
    method: "DELETE",
  });

  if (res.ok) {
    dispatch(removeTag(tagId));
    return res;
  }
};

const tagsReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = { ...state };
  switch (action.type) {
    case RECEIVE_TAG:
      nextState[action.tag.tag.id] = action.tag.tag;
      return nextState;
    case REMOVE_TAG:
      delete nextState[action.tagId];
      return nextState;
    case RECEIVE_PHOTO:
      if (action.photo.tags) {
        return action.photo.tags;
      } else {
        return null;
      }
    default:
      return nextState;
  }
};

export default tagsReducer;
