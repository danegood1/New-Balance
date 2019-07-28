import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;
          return (
            <div className="container py-5">
              {/* <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div> */}
              {/* product info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img
                    src={img}
                    style={{ marginTop: "-8rem" }}
                    className="img-fluid p-5"
                    alt="product"
                  />
                </div>
                {/* product text */}
                <div className="col-10 mx-auto col-md-6 my-5 text-capitalize">
                  <h2>model: {title}</h2>
                  <h5 className="text-title text-uppercase text-muted mt-0 mb-2">
                    SKU: <span className="text-uppercase">{company}</span>
                  </h5>
                  <h4 className="text-capitalize mt-2 mb-3">Description:</h4>
                  <p className="text-muted text-justify">{info}</p>
                  <div>
                    <br />
                    <h4 className="text-dark mt-5 mb-3">
                      <strong>
                        price: <span>R </span>
                        {price}.00
                      </strong>
                    </h4>
                    {/* buttons */}
                    <Link to="/">
                      <ButtonContainer>back to products</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "Item added" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
