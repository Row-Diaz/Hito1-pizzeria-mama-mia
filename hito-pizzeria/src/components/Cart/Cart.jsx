import React from "react";
import { useState } from "react";
import { pizzaCart } from "../Pizzas/pizzas";
import "./Cart.css";

export default function Cart() {
  const [cart, setCart] = useState(pizzaCart);

  const handleIncrease = (id) => {
    setCart((prevCart) =>
      prevCart.map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
      )
    );
  };
  const handleDecrease = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((pizza) =>
          pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
        )
        .filter((pizza) => pizza.count > 0)
    );
  };
  const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0);

  return (
    <div className="container">
      <h2>Detalles del pedido : </h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul className="list-group">
          {cart.map((pizza) => (
            <li
              key={pizza.id}
              className="list-group-item">
              <div>
                <img
                  src={pizza.img}
                  alt={pizza.name}
                  style={{ width: "100px", marginRight: "10px" }}
                />
                <h5> {pizza.name}</h5>
                <p>Precio unitario: ${pizza.price}</p>
                <p>Cantidad: {pizza.count}</p>
              </div>
              <div className="add-less">
                <button
                  className="btn btn-danger"
                  onClick={() => handleDecrease(pizza.id)}>
                  -
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => handleIncrease(pizza.id)}>
                  +
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${total.toFixed(0)}</h3>
      <button className="btn btn-primary mt-3">Pagar</button>
    </div>
  );
}
