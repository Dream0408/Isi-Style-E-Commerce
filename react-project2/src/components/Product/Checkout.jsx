import React from "react";
import "./checkout.scss";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Col, Container } from "reactstrap";

const Checkout = () => {
  return (
    <section>
      <Container>
        <wrapper className="wrapper">
          <Col className="Top">
            <button className="Top__button__continue">CONTINUE ORDERING</button>
            <div className="Top__text">
              <span>Order Bag(2)</span>
            </div>
            <button className="Top__button__checkout">CHECKOUT</button>
          </Col>
        </wrapper>
      </Container>

      <section>
        <Container>
          <div className="Bottom">
            <div className="Info">
              <div className="Product">
                <div className="Product__detail">
                  <img
                    className="Product__img"
                    src="https://i.pinimg.com/564x/0d/6b/41/0d6b4157daae3e33990af1c682d97887.jpg"
                  />
                  <div className="Details">
                    <span className="Product__name">
                      <b className="Text">PRODUCT :</b>Star Letter Print T-Shirt
                    </span>
                    <span className="Product__size">
                      <b>SIZE :</b>M
                    </span>
                  </div>
                </div>
                <div className="Price__Datail">
                  <div className="ProductAmount__container">
                    <AddIcon />
                    <span className="Product__Amount">2</span>
                    <RemoveIcon />
                  </div>
                  <span className="Product__Price">฿790</span>
                </div> 
              </div>
              <hr />
              <div className="Product">
                <div className="Product__detail">
                  <img
                    className="Product__img"
                    src="https://i.pinimg.com/564x/ab/78/d0/ab78d0e4a3dcf822df2c83a20bdb8021.jpg"
                  />
                  <div className="Details">
                    <span className="Product__name">
                      <b className="Text">PRODUCT :</b>Short Sleeve Shirt
                    </span>
                    <span className="Product__size">
                      <b>SIZE :</b>L
                    </span>
                  </div>
                </div>
                <div className="Price__Datail">
                  <div className="ProductAmount__container">
                    <AddIcon />
                    <span className="Product__Amount">2</span>
                    <RemoveIcon />
                  </div>
                  <span className="Product__Price">฿890</span>
                </div> 
              </div>
            </div>
            <div className="Summary">
              <div className="Summary__title">ORDER SUMMARY</div>
                <div className="Summary__item">
                  <div className="Summaryitem__text">Subtotal</div>
                  <div className="Summaryitem__price">฿ 1680</div>
                </div>
                <div className="Summary__item">
                  <div className="Summaryitem__text">Shipping</div>
                  <div className="Summaryitem__price">฿ 50</div>
                </div>
                <div className="Summary__item">
                  <div className="Summaryitem__text_total">Total</div>
                  <div className="Summaryitem__price_total">฿ 1730</div>
                </div>
                <button className="button__checkout">CHECKOUT NOW</button>
            </div>
          </div>
        </Container>
      </section>
    </section>
  );
};

export default Checkout;
