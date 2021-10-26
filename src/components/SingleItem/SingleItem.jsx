import React, { useParams } from "react";
import { NavLink } from "react-router-dom";
import "./singleItem.scss";
import singleImg from "../../img/single.jpg";

const SingleItem = () => {
  const data = useParams();
  console.log(data);

  return (
    <>
      <section id="singleItem">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="sm:w-full w-full">
              <div className="">
                <img src={singleImg} alt="Single Item" />
                <h2 className="text-4xl font-bold mt-10">This is some cube </h2>
                <h3 className="text-5xl font-mono font-bold my-5">$ 15</h3>
                <p className="text-xl mb-9">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Alias facilis rem soluta tempore aliquid
                </p>
                <NavLink
                  to="/cart"
                  className="bg-blue-700 text-white px-10 py-4 rounded"
                >
                  Add to cart
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleItem;
