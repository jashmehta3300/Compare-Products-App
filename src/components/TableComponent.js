import React from "react";
import { connect } from "react-redux";
import { removeProduct } from "../actions/index";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

function TableComponent(props) {
  const removeProduct = (product) => {
    props.removeProduct(product);
  };

    return (
      <Col md={{ span: 10, offset: 1 }}>
        <Table hover className="tableProducts">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price($)</th>
              <th>Calories(cal)</th>
              <th>Quantity(gr)</th>
            </tr>
          </thead>
          <tbody>
            {props.products.map(product => {
              return (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.calories}</td>
                  <td>{product.quantity}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Col>
    );
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

export default connect(
  mapStateToProps,
  { removeProduct }
)(TableComponent);
