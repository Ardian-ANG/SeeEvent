import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { getEventsReducer } from "../Reducer/eventsReducer";
import { getEventDetailReducer } from "../Reducer/eventDetailReducer";
import { getCommentReducer } from "../Reducer/commentReducer";
import userReducer from "../Reducer";

const reducers = combineReducers({
  userReducer,
  getEventsReducer,
  getEventDetailReducer,
  getCommentReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
