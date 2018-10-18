import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Products from "../component/products/Products.js";
import { Link, BrowserRouter, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { AddToWishList } from "../action/Actions.js";
import { Drawe } from "../action/Actions.js";

const drawerWidth = 240;

const styles = theme => ({
  badge: {
    top: 1,
    right: -15,
    // The border color match the background color.
    border: `2px solid ${
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[900]
    }`
  },
  bage: {
    right: -700
  },

  root: {
    flexGrow: 1
  },
  appFrame: {
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: "100%"
  },
  appBar: {
    position: "absolute",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  "appBarShift-left": {
    marginLeft: drawerWidth
  },

  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  "content-left": {
    marginLeft: -drawerWidth
  },

  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  "contentShift-left": {
    marginLeft: 0
  }
});

class Mainlayout extends Component {
  state = {
    open: false,
    anchor: "left"
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const num = (this.props.products || []).map(
      item => (item.counter ? item.counter : 0)
    );
    console.log(num);
    const sum = num.reduce((a, b) => a + b, 0);
    console.log(sum);

    const { classes, theme } = this.props;
    const { anchor, open } = this.state;

    console.log(this.props);
    const drawer = (
      <Drawer
        variant="persistent"
        anchor={anchor}
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <Button onClick={() => this.props.Drawe("men")}>
          <List>Men</List>
        </Button>
        <Divider />
        <Button onClick={() => this.props.Drawe("women")}>
          <List>Women</List>
        </Button>
      </Drawer>
    );

    let before = null;
    let after = null;

    if (anchor === "left") {
      before = drawer;
    } else {
      after = drawer;
    }

    return (
      <BrowserRouter>
        <div className={classes.root}>
          <div className={classes.appFrame}>
            <AppBar
              className={classNames(classes.appBar, {
                [classes.appBarShift]: open,
                [classes[`appBarShift-${anchor}`]]: open
              })}
            >
              <Toolbar disableGutters={!open}>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.handleDrawerOpen}
                  className={classNames(
                    classes.menuButton,
                    open && classes.hide
                  )}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" noWrap>
                  MenuIcon{" "}
                </Typography>
                <IconButton aria-label="Cart" className={classes.bage}>
                  <Link to="/product/card">
                    <Badge
                      badgeContent={sum}
                      color="primary"
                      classes={{ badge: classes.badge }}
                    >
                      <ShoppingCartIcon />
                    </Badge>
                  </Link>
                </IconButton>
              </Toolbar>
            </AppBar>
            {before}
            <main
              className={classNames(
                classes.content,
                classes[`content-${anchor}`],
                {
                  [classes.contentShift]: open,
                  [classes[`contentShift-${anchor}`]]: open
                }
              )}
            >
              <div className={classes.drawerHeader} />
              <Typography>
                {this.props.children}
                {"You think water moves fast? You should see ice."}
              </Typography>
            </main>
            {after}
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

Mainlayout.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};
const mapStateToProps = state => {
  return {
    products: state.Reducer.products
  };
};

const theme = withStyles(styles, { withTheme: true })(Mainlayout);
export default connect(
  mapStateToProps,
  { AddToWishList, Drawe }
)(theme);
