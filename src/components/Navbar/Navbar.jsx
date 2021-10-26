import React, { useState, useEffect } from "react";
import "./navbar.scss";
import { FaCartPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;

    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <>
      <section id="navbar" className="py-5">
        <div className="container mx-auto flex flex-row justify-between">
          <div className="logoName">
            <NavLink to="/">
              <h2 className="text-4xl capitalize">shopping cart</h2>
            </NavLink>
          </div>
          <div className="shoppingCartName px-12">
            <NavLink to="/cart">
              <div className="flex flex-row items-center justify-between">
                <h2 className="text-3xl text-white mr-4">Cart</h2>
                <div className="cartIcon">
                  <span>
                    <FaCartPlus className="text-3xl" />
                  </span>
                </div>
                <div className="number">
                  <span className="text-4xl countNumber">{cartCount}</span>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
