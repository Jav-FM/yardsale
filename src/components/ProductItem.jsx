import React, { useContext } from "react";
import "../styles/ProductItem.scss";
import btAddToCart from '@icons/bt_add_to_cart.svg'
import AppContext from '../context/AppContext';

const ProductItem = ({product}) => {
  const { addToCart } = useContext(AppContext);

  const handleClick = (newProduct) => {
    addToCart(newProduct);
  }
 
  return (
    <div className="ProductItem">
      <img
        src={product.images[0]}
        alt={product.title}
      ></img>
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>

        </div>
        <figure onClick={() => handleClick(product)} >
          <img src={btAddToCart} alt=""></img>
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
