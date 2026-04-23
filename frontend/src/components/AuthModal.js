import React, { useState } from "react";

function AuthModal({ show, onClose }) {
  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!show) return null;

  const handleSubmit = () => {
    if (isLogin) {
      const user = JSON.parse(localStorage.getItem("user"));

      if (user && user.email === email && user.password === password) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
alert("Login successful 🎉");
onClose();
window.location.reload(); // refresh navbar
      } else {
        alert("Invalid credentials ❌");
      }
    } else {
      const user = { name, email, password };
localStorage.setItem("user", JSON.stringify(user));
localStorage.setItem("loggedInUser", JSON.stringify(user));
      alert("Registered successfully 🚀");
      setIsLogin(true);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">

        <h2>{isLogin ? "Login" : "Register"}</h2>

        {!isLogin && (
          <input
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        )}

        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleSubmit}>
          {isLogin ? "Login" : "Register"}
        </button>

        <p onClick={() => setIsLogin(!isLogin)} className="switch">
          {isLogin ? "Create account" : "Already have an account?"}
        </p>

        <span className="close" onClick={onClose}>×</span>

      </div>
    </div>
  );
}

export default AuthModal;