import {
  GET_EVENT_DETAIL_REQUEST,
  GET_EVENT_DETAIL_SUCCES,
  GET_EVENT_DETAIL_FAILED,
} from "../Store/constant";
import axios from "axios";

export const getEventDetail = (id) => {
  return (dispatch, getState) => {
    dispatch({ type: GET_EVENT_DETAIL_REQUEST });
    //API CALL
    axios
      .get(`https://team-b-see-event.herokuapp.com/api/v1/event/${id}`)
      .then((response) => {
        dispatch({
          type: GET_EVENT_DETAIL_SUCCES,
          payload: response.data.result,
        });
      })
      .catch((error) => {
        dispatch({ type: GET_EVENT_DETAIL_FAILED, payload: error });
      });
  };
};
