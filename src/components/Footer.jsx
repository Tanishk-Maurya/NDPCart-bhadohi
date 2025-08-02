import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h3>NDPCart</h3>
          <p>District-based Multi-Vendor E-commerce Platform.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/signup">Signup</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: support@ndpcart.in</p>
          <p>Phone: +91-1234567890</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} NDPCart. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
