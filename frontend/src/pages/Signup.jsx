import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Popup from "../components/Popup";

function Signup() {
  const navigate = useNavigate();

  const [popup, setPopup] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5001/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    if (res.ok) {
      setPopup(true);
    }
  };

  const closePopup = () => {
    setPopup(false);
    navigate("/"); // go to login page
  };

  return (
    <>
      {popup && (
        <Popup
          title="Signup Successful!"
          message="Your account has been created."
          onClose={closePopup}
        />
      )}

      <div className="auth-container">
        <div className="auth-card">
          <h2 className="auth-title">Create Account</h2>
          <p className="auth-subtitle">Join us in a few steps</p>

          <form onSubmit={handleSignup}>
            <input
              className="auth-input"
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="auth-input"
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="auth-input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="auth-btn" type="submit">
              Create Account
            </button>
          </form>

          <div className="auth-link">
            Already have an account? <Link to="/">Log in</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
