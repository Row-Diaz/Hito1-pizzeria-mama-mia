import React from "react";
import "./Navbar.css";

export default function Navbar() {

  const total = 25000;
const token = false;

  return (
    <div className="nav">
      <p>"Pizzeria Mamma Mia!"</p>

      <div className="btn-nav button">
      <button>🍕Home</button>
      <button>🙍‍♂️Profile</button>
      <button>🔒Logout</button>
      <button>🔐Login</button>
      <button>🔑 Register</button>
      </div>
      <div className="amount">
        <button>🛒Total </button>
      </div>
      
    </div>
  );
}
