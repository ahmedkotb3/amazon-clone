import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingBasket } from "@material-ui/icons";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="input" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="option__lineOne">Hello Guest</span>
          <span className="option__lineTwo">Sign in</span>
        </div>
        <div className="header__option">
          <span className="option__lineOne">Returns</span>
          <span className="option__lineTwo">& orders</span>
        </div>
        <div className="header__option">
          <span className="option__lineOne">Your</span>
          <span className="option__lineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasket />
            <span className="option__lineTwo header__basketCount">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
