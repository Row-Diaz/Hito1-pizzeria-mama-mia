import React from "react";
import Header from "../Header/Header";
import CardPizza from "../Cards/CardPizza";
// import Pizzas from "../Pizzas/Pizzas";
import { pizzas } from "../Pizzas/pizzas";

export default function Home() {
  
  return (
    <div>
      <Header />
      <div id="prueba">
        <h1>Ingredientes:</h1>

        {pizzas.map((p) => (
          <CardPizza
            key={p.id}
            desc={p.desc}
            img={p.img}
            ingredients={p.ingredients}
            name={p.name}
            price={p.price}
          />
        ))}
      </div>

      

    </div>
  );
}
