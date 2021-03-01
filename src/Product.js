import { Star } from "@material-ui/icons";
import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p> the lean </p>
        <p className="product__price">
          <small>$</small>
          <strong>20</strong>
        </p>
      </div>
      <div className="product__rating">
        <p>
          <Star></Star>
        </p>
      </div>
      <img src="https://images-na.ssl-images-amazon.com/images/I/31pEe2taIPL._AC_US327_FMwebp_QL65_.jpg" />
      <button>ADD to Basket</button>
    </div>
  );
}

export default Product;
