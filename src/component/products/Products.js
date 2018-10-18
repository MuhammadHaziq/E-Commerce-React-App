import React, { Component } from "react";
import ProductDisplay from "./ProductDisplay.js";
import { connect } from "react-redux";

class Products extends Component {
  render() {
    console.log(this.props);
    console.log(this.props.categari);
    const filterProducts = (this.props.products || []).filter(
      item => item.name === this.props.categari
    );
    return (
      <div>
        {this.props.categari == null
          ? (this.props.products || []).map(item => (
              <ProductDisplay key={item.id} item={item} />
            ))
          : (filterProducts || []).map(item => (
              <ProductDisplay key={item.id} item={item} />
            ))}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    products: state.Reducer.products,
    categari: state.DraweReducer.categari
  };
};

export default connect(mapStateToProps)(Products);

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchData: name => dispatch(fetchdata("men"))
//   };
// };
// {(this.props.products || []).map(item => (
//   <ProductDisplay key={item.id} item={item} />
// ))}
