import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from '../components/Sidebar';





function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      setUser(JSON.parse(stored));
    }
  }, []);

  if (!user) {
    return (
      <>
        <Navbar />
        <Sidebar/>
        <div style={{ padding: "2rem", textAlign: "center" }}>
          <h2>You are not logged in.</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div style={{ padding: "2rem", maxWidth: "500px", margin: "auto" }}>
        <h2>Welcome, {user.name} 👋</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <button
          onClick={() => {
            localStorage.removeItem("user");
            window.location.href = "/";
          }}
          style={{
            marginTop: "1rem",
            padding: "10px 20px",
            background: "crimson",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Logout
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
