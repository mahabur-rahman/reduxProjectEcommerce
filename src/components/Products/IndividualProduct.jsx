import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { addToCart } from "../../redux/shopping/shoppingAction";

const IndividualProduct = ({ productData, addToCart }) => {
  return (
    <>
      <div className="sm:w-full">
        <div className="cardBox">
          <div className="cardImg">
            <img src={productData.image} alt="" />
          </div>

          <div className="content my-8">
            <h2 className="text-5xl font-bold">{productData.title}</h2>
            <p className="text-xl my-3">{productData.description}</p>
            <p className="text-5xl font-bold hover:text-blue-800">
              {productData.price}
            </p>
          </div>
          <div>
            <div>
              <NavLink
                to={`/single-item/${productData.id.toString()}`}
                className="bg-gray-900 w-12 rounded-md px-7 py-3 text-white text-xl capitalize"
              >
                View Item
              </NavLink>
            </div>
            <div className="mt-10">
              <NavLink
                onClick={() => addToCart(productData.id)}
                to="/cart"
                className="bg-blue-800 w-12 rounded-md px-7 py-3 text-white text-xl capitalize"
              >
                add to cart
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(IndividualProduct);
