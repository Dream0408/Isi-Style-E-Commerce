import React, { useState } from "react";
import "./productlist.scss";
import { Col, Container, Row } from "reactstrap";
import { motion } from "framer-motion";
// import { useGetAllProductsQuery } from "../slices/productsApi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../slices/cartSlice";

const Productlist = () => {
  const { items: data, status } = useSelector((state) => state.products);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const { data, error, isLoading } = useGetAllProductsQuery();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/checkoutcart");
  };

  return (
    <section>
      <Container>
        <Row>
          {/* <Col lg="3" md="4">
            <div className="filter__widget">
              <select>
                <option>Filter By Category</option>
                <option value="blazer">Blazer</option>
                <option value="jeans">Jeans</option>
                <option value="t-shirt">T-Shirt</option>
                <option value="pants">Pants</option>
              </select>
            </div>
          </Col> */}
          {/* <Col lg="9" className="Col__button">
            <div className="Button__addproduct">
              <button className="Button__name">ADD PRODUCT</button>
            </div>
          </Col> */}
        </Row>
      </Container>

      <section>
        <Container>
          <Row>
            <div className="products__container">
              <div className="products">
                {data?.map((product) => (
                  <div key={product._id}>
                    <div className="product__img">
                      <motion.img
                        whileHover={{ scale: 0.9 }}
                        src={product.image.url}
                      />
                    </div>
                    <div className="product__info p-2 text-center">
                      <h3 className="product__name">{product.name}</h3>
                      <span className="product__stock">
                        {product.stockstatus}
                      </span>
                      <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
                        <span className="price">฿{product.price}</span>
                        <div className="button__addtocart">
                          <motion.span
                            whileTap={{ scale: 1.4 }}
                            onClick={() => handleAddToCart(product)}
                          >
                            <i class="fa fa-cart-plus" aria-hidden="true"></i>
                          </motion.span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </section>
  );
};

export default Productlist;
