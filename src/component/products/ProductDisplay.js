import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { AddToWishList, AddToCheckout } from "../../action/Actions.js";
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
class ProductDisplay extends Component {
  render() {
    const { url, id, price } = this.props.item;
    const { classes } = this.props;
              
    return (
      <div>
        <div className={classes.root}>

          <Grid item conatiner xs={4} spacing={10}>
            <img src={url} alt="Pic" className={classes.image} />
            <Typography variant="title" color="inherit" noWrap>
              {this.props.item.name} Shirt
              <Button
                color={this.props.item.addedToWishList ? "primary" : "secandry"}
                onClick={() =>
                  this.props.AddToWishList(this.props.item.id, "wishlist")
                }
              >
                {" "}
                {this.props.item.addedToWishList
                  ? "REMOVE TO WISHLIST"
                  : "ADD TO WISHLIST"}
              </Button>
              <Button
                onClick={() => this.props.AddToCheckout(this.props.item.id)}
              >
                {" "}
                {this.props.item.addedToCard
                  ? "Remove From Cart"
                  : "Add To Cart"}
              </Button>
              <Divider />
              <Typography variant="caption">Price: {price}</Typography>
            </Typography>
          </Grid>
        </div>
      </div>
    );
  }
}

ProductDisplay.propTypes = {
  classes: PropTypes.object.isRequired
};

const theme = withStyles(styles)(ProductDisplay);
export default connect(
  null,
  { AddToWishList, AddToCheckout }
)(theme);
