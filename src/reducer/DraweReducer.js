import { PRODUCT_NAME } from "../action/ActionType.js";
import Products from "../component/products/Products.js";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
const INTIAL_STATE = {
  categari: null
};
const DraweReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCT_NAME: {
      return { ...state, categari: action.name };
    }
  }
  return state;
};
export default DraweReducer;
