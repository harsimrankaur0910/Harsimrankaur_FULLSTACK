import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthModal from "./AuthModal";

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  return (
    <div className="navbar">
      <div className="logo">naukri</div>

      <div className="nav-links">
        <Link to="/">Jobs</Link>
        <Link to="/companies">Companies</Link>
        <Link to="/services">Services</Link>
        <Link to="/applications">Applications</Link>
      </div>

      <div className="auth">
        {user ? (
          <>
            <span className="username">Hi, {user.name}</span>
            <button
              className="logout"
              onClick={() => {
                localStorage.removeItem("loggedInUser");
                window.location.reload();
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button onClick={() => setShowModal(true)} className="login">
              Login
            </button>
            <button onClick={() => setShowModal(true)} className="register">
              Register
            </button>
          </>
        )}
      </div>

      <AuthModal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default Navbar;