import React, { useState } from "react";
import "../styles/auth.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";





function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password || !form.confirm) {
      setError("Please fill all fields.");
      return;
    }

    if (form.password !== form.confirm) {
      setError("Passwords do not match.");
      return;
    }

    // Simulate user registration
    const newUser = { name: form.name, email: form.email };
    localStorage.setItem("user", JSON.stringify(newUser));

    navigate("/profile"); // or homepage
  };

  return (
    <div className="auth-form">
      <h2>Sign Up</h2>
      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} />
        <input type="password" name="confirm" placeholder="Confirm Password" value={form.confirm} onChange={handleChange} />
        <button type="submit">Sign Up</button>
        <p>
          Already have an account?{" "}
          <Link to="/login">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
