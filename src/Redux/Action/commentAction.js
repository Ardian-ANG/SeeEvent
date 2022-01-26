import {
  GET_COMMENT_REQUEST,
  GET_COMMENT_SUCCES,
  GET_COMMENT_FAILED,
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
      .catch((response) => {
        dispatch({ type: GET_COMMENT_FAILED, payload: response.data.massage });
      });
  };
};
