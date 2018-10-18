import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import red from "@material-ui/core/colors/red";
import Icon from "@material-ui/core/Icon";
import {
  AddQuentity,
  RemoveQuentity,
  RemoveToCheckout
} from "../../action/Actions.js";
const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 600,
    padding: theme.spacing.unit * 2,
    marginTop: 5
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  },
  icon: {
    margin: theme.spacing.unit * 2
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    "&:hover": {
      color: red[800]
    }
  }
});

class Cart extends Component {
  render() {
    const { classes } = this.props;
    const cardproducts = (this.props.products || []).filter(
      item => item.addedToCard === true
    );

    return (cardproducts || []).map(item => (
      <Paper className={classes.root}>
        <Grid container spacing={16}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={item.url} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {item.name}
                </Typography>
                <Typography gutterBottom>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography color="textSecondary">
                  <Button onClick={() => this.props.AddQuentity(item.id)}>
                    {" "}
                    <Icon
                      className={(classes.icon, "fa fa-plus-circle")}
                      color="primary"
                    >
                      +
                    </Icon>
                  </Button>

                  {!item.quentity ? 1 : item.quentity}
                  <Button onClick={() => this.props.RemoveQuentity(item.id)}>
                    <Icon
                      className={(classes.icon, "fa fa-plus-circle")}
                      color="secondary"
                    >
                      -
                    </Icon>
                  </Button>
                </Typography>
              </Grid>
              <Grid item>
                <Typography style={{ cursor: "pointer" }}>
                  <Button
                    color="secondary"
                    onClick={() => this.props.RemoveToCheckout(item.id)}
                  >
                    {" "}
                    REOMVE
                  </Button>
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">{item.price}</Typography>
              <Typography variant="subtitle1">
                Sum:
                {!item.quentity ? item.price * 1 : item.price * item.quentity}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    ));
  }
}
Cart.propTypes = {
  classes: PropTypes.object.isRequired
};
const mapStateToProps = state => {
  return {
    products: state.Reducer.products
  };
};
const theme = withStyles(styles)(Cart);
export default connect(
  mapStateToProps,
  { AddQuentity, RemoveQuentity, RemoveToCheckout }
)(theme);
