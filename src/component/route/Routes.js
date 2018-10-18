import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Products from "../products/Products.js";
import ProductDisplay from "../products/ProductDisplay.js";
import WishList from "../products/WishList.js";
import Card from "../products/Card.js";
import Cart from "../products/Cart.js";
import Mainlayout from "../../mainlayout/Mainlayout.js";
class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Mainlayout>
          <Switch>
            <Route
              exact
              path="/"
              component={() => <Redirect to="/product" />}
            />
            <Route exact path="/product" component={Products} />
            <Route exact path="/product/wishlist" component={WishList} />
            <Route exact path="/product/card" component={Cart} />
          </Switch>
        </Mainlayout>
      </BrowserRouter>
    );
  }
}
export default Routes;
// <Route exact path="/" component={Mainlayout} render={() => <h3>One</h3>}/>
