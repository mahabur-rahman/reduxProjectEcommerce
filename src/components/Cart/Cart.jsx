import React, { useState, useEffect } from "react";
import "./cart.scss";
import { FaRegTrashAlt } from "react-icons/fa";
// react redux
import { connect } from "react-redux";
import { removeFromCart, adjustQty } from "../../redux/shopping/shoppingAction";

const Cart = ({ cart, removeFromCart, adjustQty }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(1);

  // for increasing quantity 👍

  const [input, setInput] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalPrice(price);
    setTotalItems(items);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  // for increasing quantity 👍

  // const increaseQuantity = () => {
  //   setInput( prevData => prevData + 1)
  // }

  // handle change
  const handleChange = (e) => {
    // console.log(e.target.value);
    setInput(e.target.value);
  };

  return (
    <>
      <section id="cart">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="sm:w-9/12 w-full border-2 p-10">
              {cart.map((item) => (
                <div className="leftPart">
                  <div className="flex">
                    <img src={item.image} alt={item.title} />
                    <div className="content  ml-12">
                      <h2 className="text-5xl font-bold">{item.title}</h2>
                      <p className="text-xl my-3">{item.description}</p>
                      <h2 className="text-3xl font-bold">{item.price}</h2>
                    </div>
                  </div>
                  <div className="mt-10 text-center">
                    <label className="text-xl font-bold">Quantity : </label>
                    <input
                      type="number"
                      value={input}
                      placeholder="100"
                      className="text-xl font-bold p-2 border-none"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="deleteBtn">
                    <FaRegTrashAlt
                      className="text-center mx-auto mt-5 text-5xl text-red-500 cursor-pointer"
                      onClick={() => removeFromCart(item.id)}
                    />
                  </div>
                  <div className="sm:w-3/12 w-full">
                    <div className="rightPart"></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="sm:w-3/12 w-full border-2 p-5">
              <h2 className="font-bold font-mono text-4xl text-pink-600 capitalize mb-5">
                cart summery
              </h2>
              <div className="items flex justify-between mb-7 ">
                <h3>
                  Total
                  <span className="font-bold font-mono text-4xl text-red-500">
                    {totalItems}
                  </span>
                  Items
                </h3>
                <h2 className="text-xl font-bold text-red-700">
                  $ <span>{totalPrice}</span>
                </h2>
              </div>
              <div className="checkOutBtn">
                <button className="bg-red-500 px-10 py-4 rounded text-xl text-pink-50 uppercase">
                  Check out
                </button>
              </div>
            </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustQty(id, value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
