import React from "react";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import "../styles/Cart.css";

function Cart() {
  const { cart, removeFromCart, updateQty } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="cart-page">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <>
            <div className="cart-items-container">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image[0]} alt={item.name} />
                  <div className="cart-details">
                    <h3>{item.name}</h3>
                    <p>₹{item.price} x {item.qty} = ₹{ item.price*item.qty}</p>
                    <input
                      type="number"
                      min="1"
                      value={item.qty}
                      onChange={(e) =>
                        updateQty(item.id, parseInt(e.target.value))
                      }
                    />
                    <button onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <h3 className="cart-total">Total: ₹{total.toFixed(2)}</h3>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Cart;
