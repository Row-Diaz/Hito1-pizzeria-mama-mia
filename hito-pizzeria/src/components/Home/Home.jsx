import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import CardPizza from "../Cards/CardPizza";
import "./Home.css";
// import { pizzas } from "../Pizzas/pizzas";

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

      {/* <h1>Ingredientes:</h1>
        <div className="frontal">
        {pizzas.map((pizzas) => (
          <CardPizza
            key={item.id}
            desc={item.desc}
            img={item.img}
            ingredients={item.ingredients}
            name={item.name}
            price={item.price}
            
          />
        ))}
      </div> */}
    </>
  );
}
