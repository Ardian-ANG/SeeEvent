import {
  GET_EVENTS_REQUEST,
  GET_EVENTS_SUCCES,
  GET_EVENTS_FAILED,
  GET_ATTEND_EVENT_REQUEST,
  GET_ATTEND_EVENT_SUCCES,
  GET_ATTEND_EVENT_FAILED,
  SEARCH_EVENT_CATEGORY,
  SEARCH_EVENTS,
} from "../Store/constant";

const initialState = {
  events: [],
  attendEvents: [],
  searchEvents: [],
  categoryEvents: [],
  category: "",
  loading: true,
  error: "",
};

export const getEventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_EVENTS_SUCCES:
      return {
        ...state,
        loading: false,
        events: action.payload,
      };
    case GET_EVENTS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "CHANGE_CATEGORY":
      return {
        ...state,
        category: action.payload,
      };
    case SEARCH_EVENT_CATEGORY:
      return {
        ...state,
        categoryEvents: action.payload,
      };
    case SEARCH_EVENTS:
      return {
        ...state,
        searchEvents: action.payload,
      };
    case GET_ATTEND_EVENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ATTEND_EVENT_SUCCES:
      return {
        ...state,
        loading: false,
        attendEvents: action.payload,
      };
    case GET_ATTEND_EVENT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
