import React from 'react';
import '../styles/ProductInfo.scss';

import btAddToCart from '@icons/bt_add_to_cart.svg';

const ProductInfo = () => {
    return (
        <div>
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike"></img>
            <div className="productInfo">
            <p>$35,00</p>
            <p>Bike</p>
            <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
            <button className="primary-button add-to-cart-button">
                <img src={btAddToCart} alt="add to cart"></img>
                Add to cart
            </button>
            </div>
        </div>
    )
}

export default ProductInfo;