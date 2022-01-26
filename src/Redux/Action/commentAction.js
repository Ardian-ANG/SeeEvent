import {
  GET_COMMENT_REQUEST,
  GET_COMMENT_SUCCES,
  GET_COMMENT_FAILED,
  POST_COMMENT_REQUEST,
  POST_COMMENT_SUCCES,
  POST_COMMENT_FAILED,
} from "../Store/constant";
import axios from "axios";

export const getComment = (id) => {
  return (dispatch, getState) => {
    dispatch({ type: GET_COMMENT_REQUEST });
    //API CALL
    axios
      .get(`https://team-b-see-event.herokuapp.com/api/v1/comment/${id}`)
      .then((response) => {
        dispatch({
          type: GET_COMMENT_SUCCES,
          payload: response.data.result,
        });
      })
      .catch((error) => {
        dispatch({ type: GET_COMMENT_FAILED, payload: error.data.massage });
      });
  };
};
export const postComment = (data, id) => {
  return (dispatch, getState) => {
    dispatch({ type: POST_COMMENT_REQUEST });
    //API Post
    axios
      .post(`https://team-b-see-event.herokuapp.com/api/v1/comment/${id}`, {
        data: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response.data);
        dispatch({ type: POST_COMMENT_SUCCES, payload: data });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: POST_COMMENT_FAILED,
          payload: error.data.massage,
        });
      });
  };
};
