// src/components/ScrollToTop.jsx
import React, { useState, useEffect } from "react";
import "../styles/ScrollToTop.css";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = window.scrollY;
    setVisible(scrolled > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    visible && (
      <button className="scroll-to-top" onClick={scrollToTop}>
        ↑
      </button>
    )
  );
};

export default ScrollToTop;
