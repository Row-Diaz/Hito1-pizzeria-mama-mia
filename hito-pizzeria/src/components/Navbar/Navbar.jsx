import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

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
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <h1>Pizeria Mamma Mia!</h1>
        </div>
        
        <div className="navbarBtn">
          <Link to="/">
            <button className="home-btn">Home</button>
          </Link>

          <Link to="/contacto"><button className="contact-btn">Contacto</button></Link>
        </div>


        <div className="navbar-cart">
          <Link to="/cart"><button className="total-btn">
            🛒 Total: {formatCurrency(total)}
          </button></Link>
          {token ? (
            <>
             <Link to="/profile"><button className="profile-btn">🔓 Profile</button></Link>
              <Link to="/logout"><button className="logout-btn">🔒 Logout</button></Link>
            </>
          ) : (
            <>
              <Link to="/login"><button className="login-btn">🔐 Login</button></Link>
              <Link to="/register"><button className="register-btn">🔐 Register</button></Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
