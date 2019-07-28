import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <img
              src="img/Banner.jpg"
              alt="product"
              className="card-img-top mb-5"
            />

            <div class="grid">
              <div className="row text-center text-uppercase mb-0">
                <div class="shop1 col">shop all</div>
                <div class="shop2 col">shop all</div>
                <div class="shop3 col">shop all</div>
                <div class="shop4 col">shop all</div>
              </div>
              <div class="row text-center text-uppercase mb-5">
                <div class="men col">men</div>
                <div class="women col">women</div>
                <div class="boys col">boys</div>
                <div class="girls col">girls</div>
              </div>
            </div>
            <Title title="997S" />
            <div className="row mb-3">
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
