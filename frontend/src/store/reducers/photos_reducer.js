import csrfFetch from "../csrf";
import { RECEIVE_LIKE, REMOVE_LIKE } from "./likes_reducer";

export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const REMOVE_PHOTO = "REMOVE_PHOTO";

// ACTIONS
export const receivePhotos = (photos) => {
  return {
    type: RECEIVE_PHOTOS,
    photos,
  };
};

export const receivePhoto = (photo) => {
  return {
    type: RECEIVE_PHOTO,
    photo,
  };
};

const removePhoto = (photoId) => {
  return {
    type: REMOVE_PHOTO,
    photoId,
  };
};

// SELECTORS
export const getPhotos = (state) => {
  if (state.entities.photos) return Object.values(state.entities.photos);
  return [];
};
export const getPhoto = (photoId) => (state) => {
  if (state.entities.photos) return state.entities.photos[photoId];
  return null;
};

// THUNK ACTION CREATORS
export const fetchPhotos = () => async (dispatch) => {
  const res = await fetch(`/api/photos`);

  if (res.ok) {
    const photos = await res.json();
    dispatch(receivePhotos(photos));
  }
};

export const fetchPhoto = (photoId) => async (dispatch) => {
  const res = await fetch(`/api/photos/${photoId}`);

  if (res.ok) {
    const photo = await res.json();
    dispatch(receivePhoto(photo));
  }
};

// UPLOADING PHOTO
export const createPhoto = (photoData) => async (dispatch) => {
  const res = await fetch(`/api/photos`, {
    method: "POST",
    body: photoData,
    headers: {
      'X-CSRF-Token': sessionStorage.getItem('X-CSRF-Token')
    }
  });

  if (res.ok) {
    const photo = await res.json();
    dispatch(receivePhoto(photo));
  }
};

export const editPhoto = (photoData) => async (dispatch) => {
  const res = await csrfFetch(`/api/photos/${photoData.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      'Accept': "application/json",
    },
    body: JSON.stringify({ photo: photoData }),
  });

  if (res.ok) {
    const photo = await res.json();
    dispatch(receivePhoto(photo));
  }
};

export const deletePhoto = (photoId) => async (dispatch) => {
  const res = await csrfFetch(`/api/photos/${photoId}`, {
    method: "DELETE",
  });

  if (res.ok) {
    dispatch(removePhoto(photoId));
    return res;
  }
};

const photosReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = { ...state };

  switch (action.type) {
    case RECEIVE_PHOTOS:
      return { ...nextState, ...action.photos };
    case RECEIVE_PHOTO:
      nextState[action.photo.photo.id] = action.photo.photo;
      return nextState;
    case REMOVE_PHOTO:
      delete nextState[action.photoId];
      return nextState;
    case RECEIVE_LIKE:
      nextState[action.like.like.photoId].likes += 1;
      nextState[action.like.like.photoId].liked = true;
      nextState[action.like.like.photoId].likeId = action.like.like.id;
      return nextState;
    case REMOVE_LIKE:
      nextState[action.like.photoId].likes -= 1;
      nextState[action.like.photoId].liked = false;
      delete nextState[action.like.photoId].likeId;
      return nextState;
    default:
      return nextState;
  }
};

export default photosReducer;
