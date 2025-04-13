import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const total = 2500;
  const token = false;

  // Función para formatear el total
  const formatCurrency = (amount) => {
    return amount.toLocaleString("es-ES", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Pizeria Mamma Mia!</h1>
      </div>
      <div className="navbarBtn">
        <button>Home</button>
        <button>Contacto</button>
      </div>
      <div className="navbar-cart">
        <button className="total-btn">🛒 Total: {formatCurrency(total)}</button>
        {token ? (
          <>
            <button className="profile-btn">🔓 Profile</button>
            <button className="logout-btn">🔒 Logout</button>
          </>
        ) : (
          <>
            <button className="login-btn">🔐 Login</button>
            <button className="register-btn">🔐 Register</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
