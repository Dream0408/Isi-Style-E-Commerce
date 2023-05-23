import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./navbar.scss";

const Navbar = () => {

  const { cartTotalQuantity } = useSelector((state) => state.cart)

  return (
    <div className="top__nav">
      <div className="top__nav-wrapper">
        <div className="search__box">
          <input type="text" placeholder="Search..." />
          <span>
            <i class="ri-search-line"></i>
          </span>
        </div>
        <div className="top__nav-right">
          <Link to="/checkoutcart">
            <div className="order__cart">
              <i class="ri-shopping-bag-line"></i>
              <span className="cart__quantity">
                <span>{cartTotalQuantity}</span>
              </span>
            </div>
          </Link>
          <div className="profile">
            <Link to="/setting">
              <img
                className="avatar"
                src="https://cdn-icons-png.flaticon.com/512/180/180678.png"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
