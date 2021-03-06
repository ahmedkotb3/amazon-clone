import { Star } from "@material-ui/icons";
import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id,title, image, price, rating }) {
const [state,dispatch] = useStateValue();
  const addToBasket = () =>{
    dispatch({
      type : 'ADD_TO_BASKET',
      item : {
        id: id,
        title,
        image,
        price,
        rating
      }
    })
  };
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
            <p>🌟</p>
          ))}
      </div>
      <img src={image} />
      <button onClick={addToBasket}>ADD to Basket</button>
    </div>
  );
}

export default Product;
