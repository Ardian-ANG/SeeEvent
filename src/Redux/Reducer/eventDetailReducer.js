import {
  GET_EVENT_DETAIL_REQUEST,
  GET_EVENT_DETAIL_SUCCES,
  GET_EVENT_DETAIL_FAILED,
} from "../Store/constant";

const initialState = {
  event: {},
  loading: true,
  error: "",
};

export const getEventDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EVENT_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_EVENT_DETAIL_SUCCES:
      return {
        ...state,
        loading: false,
        event: action.payload,
      };
    case GET_EVENT_DETAIL_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
