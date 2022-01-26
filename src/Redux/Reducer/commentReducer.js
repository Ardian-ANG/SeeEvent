import {
  GET_COMMENT_REQUEST,
  GET_COMMENT_SUCCES,
  GET_COMMENT_FAILED,
} from "../Store/constant";

const initialState = {
  commentList: [],
  loading: true,
  error: "",
};

export const getCommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_COMMENT_SUCCES:
      return {
        ...state,
        loading: false,
        commentList: action.payload,
      };
    case GET_COMMENT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
