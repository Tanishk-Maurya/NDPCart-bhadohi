import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/product.css";
import { useCart } from "../context/CartContext";
import Sidebar from '../components/Sidebar';

function Product() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((item) => item.id === parseInt(id));
  const [mainImage, setMainImage] = useState(product?.image[0]);

  if (!product) return <h2>Not found</h2>;

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="product-detail">
        <div className="product-images">
          <div className="main-image">
            <img src={mainImage} alt="Main product" />
          </div>
          <div className="thumbnails">
            {product.image.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Thumbnail ${i}`}
                className={mainImage === img ? "active" : ""}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>
        <div className="product-info">
          <h2>{product.name}</h2>
          <p className="price">₹{product.price}</p>
          <p>{product.description}</p>
          <button className="btn" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Product;
