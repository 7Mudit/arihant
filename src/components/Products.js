import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Products.css";

const Products = ({ name, prize, img }) => {
  const { cart, setCart } = useContext(CartContext);

  const addToCart = () => {
    let newCart = [...cart];
    newCart.push({ name, prize, img });
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };
  return (
    <div className="products_card">
      <img src={img} alt="" />
      <div className="products_name">{name}</div>
      <div className="products_prize">from {prize}</div>
      <div className="overlap_text" onClick={addToCart}>
        Add To Cart
      </div>
    </div>
  );
};

export default Products;
