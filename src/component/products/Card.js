import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { AddQuentity, RemoveQuentity } from "../../action/Actions.js";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    marginTop: 5,
    backgroundColor: theme.palette.background.paper
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  image: {
    width: 150,
    height: 150
  }
});
class Card extends Component {
  render() {
    console.log(this.props.products);

    // console.log(this.props.users);
    // console.log(this.props.match.params.product);
    const cardproducts = (this.props.products || []).filter(
      item => item.addedToCard === true
    );
    console.log(cardproducts);
    return (
      <div className="container">
        <Table bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product url</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {(cardproducts || []).map(item => (
              <tr key={item.id}>
                <td>{item.id} </td>
                <td>
                  <img src={item.url} alt="Pic" className={this.props.classes.image} />
                </td>
                <td>{item.price}</td>
                <td>{item.name}</td>
                <td>
                  <Button onClick={() => this.props.AddQuentity(item.id)}>
                    {" "}
                    +
                  </Button>
                </td>
                <td>{!item.quentity ? 1 : item.quentity}</td>
                <Button onClick={() => this.props.RemoveQuentity(item.id)}>
                  {" "}
                  -
                </Button>
                <td>
                  {" "}
                  SUM={" "}
                  {!item.quentity ? item.price * 1 : item.price * item.quentity}
                </td>
                <img
                  src={item.url}
                  alt="Pic"
                  className={this.props.classes.image}
                />
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    products: state.products
  };
};
const theme = withStyles(styles)(Card);
export default connect(
  mapStateToProps,
  { AddQuentity, RemoveQuentity }
)(theme);
