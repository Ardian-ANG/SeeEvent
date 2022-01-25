import {
  GET_EVENTS_REQUEST,
  GET_EVENTS_SUCCES,
  GET_EVENTS_FAILED,
  GET_ATTEND_EVENT_REQUEST,
  GET_ATTEND_EVENT_SUCCES,
  GET_ATTEND_EVENT_FAILED,
} from "../Store/constant";
import axios, { Axios } from "axios";

export const getEvents = () => {
  return (dispatch, getState) => {
    dispatch({ type: GET_EVENTS_REQUEST });
    //API Call
    axios
      .get("https://team-b-see-event.herokuapp.com/api/v1/event?limit=4")
      .then((response) => {
        const event = response.data.result;
        dispatch({ type: GET_EVENTS_SUCCES, payload: event });
      })
      .catch((error) => {
        dispatch({ type: GET_EVENTS_FAILED, payload: error });
      });
  };
};

export const searchCategory = (category) => {
  return (dispatch, getState) => {
    dispatch({ type: "SEARCH_EVENT_CATEGORY", payload: category });
  };
};

export const getAttendEvent = () => {
  return (dispatch, getState) => {
    dispatch({ type: GET_ATTEND_EVENT_REQUEST });
    //API CALL
    axios
      .get(
        "https://team-b-see-event.herokuapp.com/api/v1/event?sort=date&limit=4"
      )
      .then((response) => {
        const events = response.data.result;
        dispatch({ type: GET_ATTEND_EVENT_SUCCES, payload: events });
      })
      .catch((error) => {
        dispatch({ type: GET_ATTEND_EVENT_FAILED, payload: error });
      });
  };
};
