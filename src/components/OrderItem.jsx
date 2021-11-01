import React, {useContext} from "react";
import AppContext from '../context/AppContext';
import '../styles/OrderItem.scss';
import close from '../assets/icons/icon_close.png';

const OrderItem = ({product}) => {
const {removeFromCart} = useContext(AppContext);

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
        <img src={close} alt="close" onClick={() => removeFromCart(product)}/>
      </div>
    </div>
  );
};

export default OrderItem;
