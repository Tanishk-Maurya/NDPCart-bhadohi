import React, { useState } from "react";
import "../styles/auth.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";




function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser || storedUser.email !== form.email) {
      setError("User not found.");
      return;
    }

    // Password is not stored securely in this mock
    navigate("/profile");
  };

  return (
    <div className="auth-form">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} />
        <button type="submit">Login</button>
          <p>
            Don't have an account?{" "}
            <Link to="/signup">
              Sign up here
            </Link>
          </p>
      </form>
    </div>
  );
}

export default Login;
