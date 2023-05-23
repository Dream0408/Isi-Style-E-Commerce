import React from "react";
import { motion } from "framer-motion";
import "./productcard.scss";
import { Col } from "reactstrap";

const ProductCard = ({ item }) => {
  return (
    <Col lg="2">
      <div className="product__item">
        <div className="product__img">
          <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
        </div>
        <div className="product__info p-2 text-center">
          <h3 className="product__name">{item.productName}</h3>
          <span>{item.category}</span>
          <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
            <span className="price">฿{item.price}</span>
            <motion.span whileTap={{ scale: 1.4 }}>
              <i class="fa fa-cart-plus" aria-hidden="true"></i>
            </motion.span>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
