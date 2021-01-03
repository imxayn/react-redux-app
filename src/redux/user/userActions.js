//action creator --> action creator returns an action object with type property
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  POST_USER_REQUEST,
} from "./userTypes";
import axios from "axios";

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const postUserRequest = () => {
  return {
    type: POST_USER_REQUEST,
  };
};

export const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

export const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

//this is special action creator, special because of redux-thunk middleware, which means it will return another function instead of object
// and this function doesn't need to be pure it may have side effects such as async API Call
export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data;
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUserFailure(errorMsg));
      });
  };
};

export const postUsers = () => {
  const data = {
    userId: 2001,
    id: 17001,
    title: "test1",
    body: "test1",
  };
  return (dispatch) => {
    dispatch(postUserRequest);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        ...data,
      })
      .then((response) => {
        console.log(response, "data posted successfully");
      })
      .catch((error) => {
        console.log(error, "error");
      });
  };
};
