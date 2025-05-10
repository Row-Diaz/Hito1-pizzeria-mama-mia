import React, { useEffect, useState } from "react";
import Header from "../../Header/Header";
import CardPizza from "../../Cards/CardPizza";
import "./Home.css";
// import { pizzas } from "../Pizzas/pizzas";
import Pizza from "../Pizza";


export default function Home() {
  const [pizzas, setPizza] = useState([]);

  async function fetchPizza() {
    try {
      const response = await fetch("http://localhost:5000/api/pizzas");
      const data = await response.json();
      console.log(data);
      setPizza(data);
    } catch (error) {
      alert("Ha ocurrido un error inesperado.");
    }
  }

  useEffect(() => {
    fetchPizza();
  }, []);

  return (
    <>
      <Header />
      

      <div className="pizzaMap">
        {pizzas.map((pizza, index) => (
         
            
          

<div className="ppal"  key={pizza.id} pizza={pizza}>
      <div className="container">
        <div className="card-model">
          <div className="pizza-img">
            <img id="pizzas" src={pizza.img} alt="" />
            <h2>{pizza.name}</h2>
          </div>

          <div
            className="sabores"
            style={{ listStyleType: "none", padding: 0 }}
          >
            <div className="card-title">
              <p>INGREDIENTES</p>
            </div>
            <div className="saboresMap">
              🍕
              {pizza.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </div>
          </div>

          <div className="amounts">
            <h2 className="valor">
              <strong>Precio: </strong>
              {index.price} CLP
            </h2>
            <div className="prueba">
              <div className="btns">
                <button className="verMas">Ver más 👀</button>
              </div>

              <div className="btns2">
                <button className="anadir">Añadir 🛒</button>
              </div>
            </div>
          </div>

          <div className="description">{pizza.desc}</div>
        </div>
      </div>
    </div>









        ))}
      </div>
    </>
  );
}
