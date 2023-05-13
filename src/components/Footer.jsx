import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_section">
      <div className="footer_one">
        <img
          src="https://www.artisanlab.in/cdn/shop/files/AL_Logo_2x_93505e50-bcd3-437e-bc6b-c14164062af8_100x@2x.png?v=1614315949"
          alt="Not Found"
        />
      </div>
      <div className="footer_common">
        <h4 className="h4-title">About Us</h4>
        <div className="footer_links">
          <div>Retail Location</div>
          <div>Cafe</div>
          <div>Our Story</div>
          <div>Journal</div>
          <div>Press</div>
        </div>
      </div>
      <div className="footer_common">
        <h4 className="h4-title">Support</h4>
        <div className="footer_links">
          <div>Terms of Use</div>
          <div>Shopping & Returns</div>
          <div>Privacy Policy</div>
          <div>FAQs</div>
          <div>Contact</div>
          <div>Refund Polling</div>
          <div>Terms of Service</div>
          <div>Refund Policy</div>
        </div>
      </div>
      <div className="footer_common">
        <h4 className="h4-title">Services</h4>
        <div className="footer_links">
          <div>Gifting Service</div>
          <div>Styling Service</div>
          <div>Collaboration</div>
          <div>Wholesale Orders</div>
          <div>Request a Catalog</div>
        </div>
      </div>
      <div className="footer_common">
        <h4 className="h4-title">Contact Us</h4>
        <div className="footer_links">
          <p>N-18, 1st & 2nd Floor, Greater Kailash-1, New Delhi-110048</p>
          <p>(+)91-8287757707 <br />info@artisanlab.in</p>
          <p>Monday - Saturday <br />10am to 6pm (IST)</p>
        </div>
      </div>
      <div className="footer_common">
        <h4 className="h4-title">Newsletter</h4>
        <p className="newsletter-para">
          Stay in the loop. Opt in with your email address. We respect your
          privacy and will never spam you with irrelevant information.
        </p>
        <input
          type="email"
          className="newsletter-email"
          placeholder="Enter your email"
        />
      </div>
      
    </div>
  );
};

export default Footer;
