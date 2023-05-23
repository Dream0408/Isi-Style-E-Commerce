import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./checkoutcart.scss";
import { Link } from "react-router-dom";
import cartSlice, {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../../slices/cartSlice";
import PayButton from "./PayButton";

const Checkoutcart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart__container">
      <h2>ORDER CART</h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart__empty">
          <p>Your cart is currently empty</p>
          <div className="start__ordering">
            <Link to="/product">
              <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
              <span>Start Ordering</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product__title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart__items">
            {cart.cartItems?.map((cartItem) => (
              <div className="cart__item" key={cartItem._id}>
                <div className="cart__product">
                  <img src={cartItem.image.url} alt={cartItem.name} />
                  <div>
                    <h3>{cartItem.name}</h3>
                    <button onClick={() => handleRemoveFromCart(cartItem)} className="remove">
                      Remove
                    </button>
                  </div>
                </div>
                <div className="cart__product__price">฿{cartItem.price}</div>
                <div className="cart__product__quantity">
                  <button onClick={() => handleDecreaseCart(cartItem)}>
                    -
                  </button>
                  <div className="count">{cartItem.cartQuantity}</div>
                  <button onClick={() => handleIncreaseCart(cartItem)}>
                    +
                  </button>
                </div>
                <div className="cart__product__total-price">
                  ฿{cartItem.price * cartItem.cartQuantity}
                </div>
              </div>
            ))}
          </div>
          <div className="cart__summary">
            <button className="clear__cart" onClick={() => handleClearCart()}>
              CLEAR CART
            </button>
            <div className="cart__checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">฿{cart.cartTotalAmount}</span>
              </div>
              <p>Texes and shipping calculated at checkout</p>
              <PayButton cartItems={cart.cartItems}/>
              {/* <button>CHECKOUT ORDER</button> */}
              <div className="continue__ordering">
                <Link to="/product">
                  <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
                  <span>Continue Ordering</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkoutcart;
