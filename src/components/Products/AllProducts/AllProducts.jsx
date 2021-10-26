import React from "react";
import "./allProduct.scss";
import IndividualProduct from "../IndividualProduct";
import { connect } from "react-redux";

const AllProducts = ({ products }) => {
  return (
    <>
      <section id="allProducts">
        <div className="container mx-auto">
          <div className="flex flex-wrap text-center">
            {products.map((product) => (
              <IndividualProduct productData={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};
export default connect(mapStateToProps)(AllProducts);
