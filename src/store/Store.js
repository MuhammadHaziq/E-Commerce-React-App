import React, { Component } from "react";
import Reducer from "../reducer/Reducer.js";
import DraweReducer from "../reducer/DraweReducer.js";
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
const Reducers = combineReducers({
  Reducer: Reducer,
  DraweReducer: DraweReducer
});
const store = createStore(
  Reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);
export default store;
