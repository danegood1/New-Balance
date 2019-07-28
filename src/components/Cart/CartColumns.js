import React from "react";

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row mt-5 mb-5">
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase font-weight-bold">product</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase font-weight-bold">name</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase font-weight-bold">price</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase font-weight-bold">quatity</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase font-weight-bold">remove</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase font-weight-bold">total</p>
        </div>
      </div>
    </div>
  );
}
