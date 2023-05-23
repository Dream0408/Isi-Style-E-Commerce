import React from "react";
import { Container } from "reactstrap";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./productdetail.scss";

const ProductDetail = () => {
  return (
    <Container className="Product__detail">
      <wrapper className="wrapper">
        <div className="Img__container">
          <img
            className="Img__product"
            src="https://i.pinimg.com/564x/c8/47/0c/c8470c0fa828d89cc043a2d2de2103e1.jpg"
          />
        </div>
        <div className="Info__container">
          <h4 className="product__Title">Denim Jeans</h4>
          <span className="Product__price">฿490</span>
          <div className="filter__size">
            <span>Size</span>
            <select className="select__size">
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
            </select>
          </div>
          <div className="Add__container">
            <div className="Amount__container">
              <RemoveIcon />
              <span>1</span>
              <AddIcon />
            </div>
            <button className="button">ADD TO CART</button>
          </div>
        </div>
      </wrapper>
    </Container>
  );
};

export default ProductDetail;
