import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import userReducer from "../Reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(userReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
