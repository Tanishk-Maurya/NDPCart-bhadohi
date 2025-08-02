import React from "react";
import productsData from "../data/products";
import ProductCard from "../components/ProductCard";
import "../styles/home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useFilter } from "../context/FilterContext";
import Sidebar from '../components/Sidebar';





function Home() {
  const { searchTerm, selectedCategory } = useFilter();

  const filteredProducts = productsData.filter((product) => {
    const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = selectedCategory ? product.category === selectedCategory : true;
    return matchSearch && matchCategory;
  });

  return (
    <>
      <Navbar /> 
      <Sidebar/>
      <section className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p style={{ textAlign: "center", margin: "2rem auto", fontSize: "1.2rem" }}>
            No products match your search.
          </p>
        )}
      </section>
      <Footer />
    </>
  );
}

export default Home;
