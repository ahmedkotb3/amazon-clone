import { Star } from "@material-ui/icons";
import React from "react";
import "./Product.css";

function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p> {title} </p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div className="product__rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>
              <Star></Star>
            </p>
          ))}
      </div>
      <img src={image} />
      <button>ADD to Basket</button>
    </div>
  );
}

export default Product;
