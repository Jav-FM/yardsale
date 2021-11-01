import React from "react";
import '../styles/OrderItem.scss'

const OrderItem = ({product}) => {
  return (
    <div className="OrderItem">
      <div className="shopping-cart">
        <figure>
          <img
            src={product.images[0]}
            alt={`imagen ${product.title}`}
          ></img>
        </figure>
        <p>{product.title}</p>
        <p>${product.price}</p>
      </div>
    </div>
  );
};

export default OrderItem;
