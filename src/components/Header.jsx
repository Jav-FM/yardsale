import React, { useState } from "react";
import Menu from '../components/Menu';
import '../styles/Header.scss'

import menuSvg from '@icons/icon_menu.svg';
import logoSvg from '@logos/logo_yard_sale.svg'; 
import shoppingCartSvg from '@icons/icon_shopping_cart.svg';

const Header = () => {
  const [toggle, setToggle] = useState(false);

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
          <li className="navbar-shopping-cart">
            <img src={shoppingCartSvg} alt="shopping cart"></img>
            <div>2</div>
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
    </nav>
  );
};

export default Header;
