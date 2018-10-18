import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
class WishList extends Component {
  render() {
    console.log(this.props.products);
    // console.log(this.props.users);
    // console.log(this.props.match.params.product);
    const wishlistproducts = (this.props.products || []).filter(
      item => item.addedToWishList === true
    );
    console.log(wishlistproducts);
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
            {(wishlistproducts || []).map(item => (
              <tr key={item.id}>
                <td>{item.id} </td>
                <td>{item.url} </td>
                <td>{item.price}</td>
                <td>{item.name}</td>
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

export default connect(mapStateToProps)(WishList);
