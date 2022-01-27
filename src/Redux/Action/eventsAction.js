import {
  GET_EVENTS_REQUEST,
  GET_EVENTS_SUCCES,
  GET_EVENTS_FAILED,
  GET_ATTEND_EVENT_REQUEST,
  GET_ATTEND_EVENT_SUCCES,
  GET_ATTEND_EVENT_FAILED,
  SEARCH_EVENTS,
  SEARCH_EVENT_CATEGORY,
} from "../Store/constant";
import axios from "axios";

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

export const changeCategory = (category) => {
  return (dispatch) => {
    dispatch({ type: "CHANGE_CATEGORY", payload: category });
  };
};

export const searchCategory = (select) => {
  return async (dispatch) => {
    try {
      const response = await axios(
        `https://team-b-see-event.herokuapp.com/api/v1/event?category=${select}`
      );
      dispatch({
        type: SEARCH_EVENT_CATEGORY,
        payload: response.data.result,
      });
    } catch (error) {
      console.log(error);
    }
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

export const searchEvent = (keyword) => {
  return async (dispatch) => {
    try {
      const response = await axios(
        `https://team-b-see-event.herokuapp.com/api/v1/event?keyword=${keyword}`
      );
      const event = response.data.result;
      dispatch({
        type: SEARCH_EVENTS,
        payload: event,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterByDate = (filter) => {
   return async (dispatch) => {
     try {
       const response = await axios(
         `https://team-b-see-event.herokuapp.com/api/v1/event?date=${filter}`
       );
       const event = response.data.result;
       dispatch({
         type: "FILTER_BY_DATE",
         payload: event,
       });
     } catch (error) {
       console.log(error);
     }
   };
 };

 export const sortBy = (sort) => {
   return async (dispatch) => {
     try {
       const response = await axios(
         `https://team-b-see-event.herokuapp.com/api/v1/event?sort=${sort}`
       );
       const event = response.data.result;
       dispatch({
         type: "SORT_BY",
         payload: event,
       });
     } catch (error) {
       console.log(error);
     }
   };
 };

