const initialState = {
  // user: localStorage.getItem('user') ? localStorage.getItem('user'): false,/
  user: '',
  token: localStorage.getItem('token') ? localStorage.getItem('token') : false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "TOKEN":
      return {
        ...state,
        token: action.payload,
      };
    case "USER_LOGOUT":
      return {
        ...state,
        user: "",
        token: "",
      };

    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}
