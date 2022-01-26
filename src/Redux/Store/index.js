// import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { userLoginReducer } from "../Reducer/userReducer";
// const reducers = combineReducers({
//   userLogin: userLoginReducer,
// });

// const userInfoFromStorage = localStorage.getItem("userInfo")
//   ? JSON.parse(localStorage.getItem("userInfo"))
//   : undefined;
// const initialState = {
//   userLogin: { userInfo: userInfoFromStorage },
// };

// const middleware = [thunk];

// const store = createStore(
// userReducer,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;
import { createStore, applyMiddleware, compose } from "redux";
import userReducer from "../Reducer/userReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(userReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
