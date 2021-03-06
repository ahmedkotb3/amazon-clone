import { Star } from "@material-ui/icons";
import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";


function CheckoutProduct({id,image,title,price,rating}) {

    const [{basket},dispatch] = useStateValue();
  
    const removeProduct = ()=> {
        dispatch({
            type : 'REMOVE_FROM_BASKET',
            id

        })

    };

  return (
    <div className="checkoutProduct">
      
       <img className="checkoutProduct__image" src={image} /> 
       <div className="checkoutProduct__info">
           <p className="checkoutProduct__title">{title}</p>
           <p className="checkoutProduct__price">
               <small>$</small>
               <strong>{price}</strong>
           </p>
           <div className="checkoutProduct__rating">
               {Array(rating).fill().map(() =>(<p className="star"><Star /></p>))
               }
           </div>

           <button onClick={removeProduct}>remove from basket</button>

       </div>
    </div>
  );
}

export default CheckoutProduct;
