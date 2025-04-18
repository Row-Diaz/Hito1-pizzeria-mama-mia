import React, { useState } from "react";

export default function Registro() {
  console.log("Componente Registro montado");
  const [user, setUser] = useState({
    email: "",
    contrasena: "",
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

  const handleSubmit = (e) => { e.preventDefault(); // Previene el comportamiento por defecto del formulario

    if (user.contrasena !== user.confirContrasena) {
      setMessageError("Las contraseñas no coinciden.");
      return;
    }}

    
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
        <label htmlFor="contrasena">Contraseña</label>
        <input
          id="contrasena"
          type="password"
          value={user.contrasena}
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
