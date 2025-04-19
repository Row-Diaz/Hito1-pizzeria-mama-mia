import React, { useState } from "react";
import "./FormularioRegistro.css";

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

  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario

    if (!user.email || !user.contrasena || !user.confirContrasena) {
      setMessageError("Todos los campos son obligatorios");
      return;
    }

    // Validación del email
    if (!user.email) {
      setMessageError("El campo email es obligatorio");
      return;
    }

    // Corrige la expresión regular para validar el correo
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
      setMessageError("El correo no es válido");
      return;
    }

    // Validación de contraseñas
    if (user.contrasena !== user.confirContrasena) {
      setMessageError("Las contraseñas no coinciden.");
      return;
    }

    // Limpiar el formulario si todo es correcto
    setUser({
      email: "",
      contrasena: "",
      confirContrasena: "",
    });
    setMessageError(""); // Limpiar el mensaje de error
  };

  return (
    <div >
      <form className="formulario" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
        </div>
        <div>
          <input
            id="email"
            type="text"
            value={user.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="contrasena">Contraseña</label>
        </div>
        <div>
          <input
            id="contrasena"
            type="password"
            value={user.contrasena}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="confirContrasena">Confirmar Contraseña</label>
        </div>
        <div>
          <input
            id="confirContrasena"
            type="password"
            value={user.confirContrasena}
            onChange={handleChange}
          />
        </div>
        <div className="container-btn">
          <button className="register" type="submit">
            Registrar
          </button>
        </div>
        
        {messageError && <p style={{ color: 'red' }}>{messageError}</p>}
      </form>
    </div>
  );
}
