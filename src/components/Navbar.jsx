import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";
import { useCart } from "../context/CartContext";
import Sidebar from "./Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useFilter } from "../context/FilterContext";
import { useSidebar } from "../context/SidebarContext";

function Navbar() {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useCart();
  const location = useLocation();
  const { searchTerm, setSearchTerm, selectedCategory, setSelectedCategory } = useFilter();
  const { toggleSidebar } = useSidebar();

  useEffect(() => {
    const stored = localStorage.getItem("user");
    setUser(stored ? JSON.parse(stored) : null);
    setMenuOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className="navbar">
        <div className="logo-container">
          <button className="menu-btn" onClick={toggleSidebar}>
            ☰ Menu
          </button>
          <h2 className="logo"><Link to="/">NDPCart</Link></h2>
          <img src="../public/logo.png" alt="Logo" />
        </div>

        <div className="navbar-left">
          <input
            type="text"
            placeholder="Search products..."
            className="navbar-search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </div>

        <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
          <li><Link className={isActive("/") ? "active" : ""} to="/">Home</Link></li>
          <li className="cart-icon">
            <Link className={isActive("/cart") ? "active" : ""} to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className="cart-count">{cart.length}</span>
            </Link>
          </li>
          <li><Link className={isActive("/login") ? "active" : ""} to="/login">Login</Link></li>
        </ul>
      </nav>

      {/* Subnavbar below sticky navbar */}
      <div className="subnavbar">
        {["All", "Electronics", "Clothing", "Home"].map((cat) => (
          <button
            key={cat}
            className={`subnav-btn ${selectedCategory === cat || (cat === "All" && selectedCategory === "") ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat === "All" ? "" : cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </>
  );
}

export default Navbar;
