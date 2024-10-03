import React from "react";
import search from "../../assets/svg/lup.svg";
import wishlist from "../../assets/svg/li.svg";
import cart from "../../assets/svg/mm.svg";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function Header() {
  const {t, i18n} = useTranslation() 
  const{value} = useSelector ((state) => state.counter)
  const {items} = useSelector ((state) => state.wishlist)

  function handleChangeLg (event) {
    const lng = event.target.value;
    i18n.changeLanguage(lng)
  }
  return (
    <div>
      <div className="top-header">
        <div className="container flex">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <select onChange={handleChangeLg}> 
            <option value="kg">KGZ</option>
            <option value="en">END</option>
            <option value="ru">RUS</option>
          </select>
        </div>
      </div>
      <header className="header container">
        <div className="header-left">
          <h1>{t("logo")}</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/register">Sing up</Link>
            </li>
          </ul>
        </div>
        <div className="header-right">
          <div className="search">
            <input type="text" placeholder="What are you looking for?" />
            <img src={search} alt="" />
          </div>
          <div className="icons">
            <Link to={"wishlist"}>
            <img src={wishlist} alt="" />
            </Link>
            <div className="count">{items.length}</div>
            <img src={cart} alt="" />
          </div>
        </div>
      </header>
      
    </div>
  );
}

export default Header;