import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingBasket } from "@material-ui/icons";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
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
        <div className="header__optionBasket">
          <ShoppingBasket />
          <span className="option__lineTwo header__basketCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
