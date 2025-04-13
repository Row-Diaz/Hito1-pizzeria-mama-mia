import React from "react";
import "./Navbar.css";

// export default function Navbar() {

//   const total = 25000;
// const token = false;

//   return (
//     <div className="nav">
//       <p>"Pizzeria Mamma Mia!"</p>

//       <div className="btn-nav button">
//       <button>🍕Home</button>
//       <button>🙍‍♂️Profile</button>
//       <button>🔒Logout</button>
//       <button>🔐Login</button>
//       <button>🔑 Register</button>
//       </div>
//       <div className="amount">
//         <button>🛒Total </button>
//       </div>

//     </div>
//   );
// }

const Navbar = () => {
  const total = 25000;
  const token = true;

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
