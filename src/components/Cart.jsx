// Cart.js
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext.js";
import "./Cart.css"; // create this CSS file
import { AiOutlineClose } from "react-icons/ai";

const Cart = () => {
  const { cart, isCartOpen, setIsCartOpen } = useContext(CartContext);
  const total = cart.reduce(
    (total, item) => total + parseInt(item.prize.replace(/[^0-9.-]+/g, "")),
    0
  );
  const handleCheckout = () => {
    var options = {
      // S2tU31EgnR7PXsSuemC3Z9oi
      "key": "rzp_test_zHCQ8uYC03OJAt", // Enter your key here
      "amount": total * 100, // amount in the smallest currency unit
      "currency": "INR",
      "name": "Arihant Surana",
      "description": "Test Transaction",
      "image": "https://example.com/your_logo.jpg",
      "handler": function (response){
        alert(response.razorpay_payment_id);
        // You can write logic here to send this response to your backend
      },
      "prefill": {
          "name": "Arihant Surana",
          "email": "customer@example.com",
          "contact": "9999999999"
      },
      "theme": {
          "color": "#F37254"
      }
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  };
  

  return (
    <div className="cart_section">
      <div
        className={`cartLeft-section ${isCartOpen ? "cart-open" : ""}`}
      ></div>
      <div className={`cart ${isCartOpen ? "cart-open" : ""}`}>
        <div className="cart-section_header">
          <h1 className="h1-title">Cart</h1>
          <button
            className="cart-close-button"
            onClick={() => setIsCartOpen(false)}
          >
            <AiOutlineClose />
          </button>
        </div>

        <div className="cart_items_box">
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <div key={index} className="cart-product">
                <div className="cart-product-image">
                  <img src={item.img} alt="" />
                </div>
                <div className="cart-product-details">
                  <div className="h5-title">{item.name}</div>
                  <p>Red / 13 x 19 cm</p>
                  <p>Add Gift Wrap: No</p>
                  <div className="cart-product-prize">{item.prize}</div>
                </div>
              </div>
            ))
          ) : (
            <div className="h3-title">Your cart is currently empty.</div>
          )}
          {/*  */}
        </div>
        {cart.length > 0 && (
          <div className="cart_item_note">
            <h4 className="cart-h4-title">Order Note</h4>
            <textarea name="" id="" cols="45" rows="5"></textarea>
          </div>
        )}

        {cart.length > 0 && (
          <div className="cart_totalPrize">
            <div className="subtotal">
              <div className="subtotal_text">Subtotal</div>

              <div className="subtotal_text">
                ₹{total.toLocaleString("en-IN")}
              </div>
            </div>
            <p>Shipping, taxes, and discount codes calculated at checkout</p>
            <button className="checkout-btn" onClick={handleCheckout}>Check Out</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
