import React, { useContext } from "react";
import "./Navbar.css";
import { BiUser } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartContext } from "../context/CartContext.js";

const Navbar = () => {
  const {setIsCartOpen } = useContext(CartContext);
  return (
    <>
      {/* <div className="cart_section">
        <div className="cart_section_left">

        </div>
        <div className="cart_section_right"></div>
        <div className="cart_section_header">
          <h1 className="h1-title">CART</h1>
        </div>
      </div> */}
      <div className={`navbar_section`}>
        <div className="navbar_logo">
          <img
            src="https://www.artisanlab.in/cdn/shop/files/AL_Logo_2x_93505e50-bcd3-437e-bc6b-c14164062af8_100x@2x.png?v=1614315949"
            alt="Not Found"
          />
        </div>
        <div className="navbar_navigation_links">
          <div className="nav-link">Home & Living</div>
          <div className="nav-link">The Gift Shop</div>
          <div className="nav-link">Cafe</div>
          <div className="nav-link">Journal</div>
          <div className="nav-link">Press</div>
          <div className="nav-link">Our Story</div>
        </div>
        <div className="navbar_three_icons">
          <BiUser />
          <BsSearch />
          {/* ${cart.length > 0 ? "bouncing" : ""} */}
          <div className={`cart-icon`} 
          onClick={() => setIsCartOpen(true)}>
            <AiOutlineShoppingCart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
