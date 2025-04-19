import React, { useState } from 'react';
import "./FormularioLogin.css";

export default function FormularioLogin() {
  const [user, setUser] = useState({
    email: "",
    contrasena: "",
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

    // Validación de campos vacíos
    if (!user.email || !user.contrasena) {
      setMessageError("Todos los campos son obligatorios");
      return;
    }

    // Validación del email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
      setMessageError("El correo no es válido");
      return;
    }

    if (user.contrasena.length < 6) {
        setMessageError("La contraseña debe tener al menos 6 caracteres");
        return;
      }

    // Aquí puedes manejar el inicio de sesión, por ejemplo, enviando los datos a una API

    // Limpiar el formulario si todo es correcto
    setUser({
      email: "",
      contrasena: "",
    });
    setMessageError(""); // Limpiar el mensaje de error
  };

  return (
    <div >
      <h1>Login</h1>
      <form className='formulario-login' onSubmit={handleSubmit}>
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

        <div className='login1-btn'>
          <button className="inicio-sesion" type="submit">Loging</button>
        </div>
        <div className='error-login'>
        {messageError && <p style={{ color: 'red' }}>{messageError}</p>}
        </div>
      </form>
    </div>
  );
}