import React from "react";
import { Link } from "react-router-dom";

export default function CartTotals({ value }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right mb-3">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mt-5 mb-3 px-5"
                type="button"
                onClick={() => clearCart()}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className="text-title">subtotal: </span>
              <strong>R {cartSubTotal}.00</strong>
            </h5>
            <h5>
              <span className="text-title">VAT 14%: </span>
              <strong>R {cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title">total: </span>
              <strong>R {cartTotal}</strong>
            </h5>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
