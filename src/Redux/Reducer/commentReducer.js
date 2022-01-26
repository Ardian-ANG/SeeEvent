import {
  GET_COMMENT_REQUEST,
  GET_COMMENT_SUCCES,
  GET_COMMENT_FAILED,
  POST_COMMENT_REQUEST,
  POST_COMMENT_SUCCES,
  POST_COMMENT_FAILED,
} from "../Store/constant";

const initialState = {
  commentList: [],
  error: "",
};

export const getCommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENT_REQUEST:
      return {
        ...state,
      };
    case GET_COMMENT_SUCCES:
      return {
        ...state,
        commentList: action.payload,
      };
    case GET_COMMENT_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    case POST_COMMENT_REQUEST:
      return {
        ...state,
      };
    case POST_COMMENT_SUCCES:
      return {
        ...state,
        commentList: [action.payload, ...state.commentList],
      };
    case POST_COMMENT_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
