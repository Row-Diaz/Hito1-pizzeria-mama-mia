import React, { useState } from "react";

export default function Registro() {
  console.log("Componente Registro montado");
  const [user, setUser] = useState({
    email: "",
    contraseña: "",
    confirContrasena: "",
  });

  const [messageError, setMessageError] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [id]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          value={user.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="contraseña">Contraseña</label>
        <input
          id="contraseña"
          type="password"
          value={user.contraseña}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="confirContrasena">Confirmar Contraseña</label>
        <input
          id="confirContrasena"
          type="password"
          value={user.confirContrasena}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Registrar</button>
      {messageError && <p>{messageError}</p>}
    </form>
  );
}
