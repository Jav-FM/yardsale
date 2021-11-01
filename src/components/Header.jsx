import React, { useState, useContext } from "react";
import Menu from '../components/Menu';
import MyOrder from '../containers/MyOrder';
import '../styles/Header.scss';
import menuSvg from '@icons/icon_menu.svg';
import logoSvg from '@logos/logo_yard_sale.svg'; 
import shoppingCartSvg from '@icons/icon_shopping_cart.svg';
import AppContext from '../context/AppContext';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const {state} = useContext(AppContext)

  const handleToggle = () => {
    setToggle(!toggle);
  }

  return (
    <nav>
      <img src={menuSvg} alt="menu" className="menu"></img>

      <div className="navbar-left">
        <img src={logoSvg} alt="logo" className="nav-logo"></img>

        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>javiera@example.com</li>
          <li className="navbar-shopping-cart" onClick={() => setToggleOrders(!toggleOrders)}>
            <img src={shoppingCartSvg} alt="shopping cart"></img>
            {state.cart.length ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>
  );
};

export default Header;
