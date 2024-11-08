import React, { useContext, useState } from "react";
import "./Navbar.scss";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);
  let [menu, setMenu] = useState("shop");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link to="/">Shop</Link>
          <div className={`nav-hr ${menu === "shop" ? "expanded" : ""}`}>
            <hr />
          </div>
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link to="/mens">Man</Link>
          <div className={`nav-hr ${menu === "mens" ? "expanded" : ""}`}>
            <hr />
          </div>
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link to="/womens">Woman</Link>
          <div className={`nav-hr ${menu === "womens" ? "expanded" : ""}`}>
            <hr />
          </div>
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="/kids">Kids</Link>
          <div className={`nav-hr ${menu === "kids" ? "expanded" : ""}`}>
            <hr />
          </div>
        </li>
      </ul>
      <div className="nav-login-card">
        <Link to={"/login"}>
          <button>Login</button>
        </Link>
        <Link to={"/cart"}>
          <img src={cart_icon} alt="img" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};
export default Navbar;
