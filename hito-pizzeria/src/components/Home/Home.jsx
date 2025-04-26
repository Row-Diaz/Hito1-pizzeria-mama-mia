import React from "react";
import Header from "../Header/Header";
import CardPizza from "../Cards/CardPizza";
import { pizzas } from "../Pizzas/pizzas";

export default function Home() {
  
  return (
    <div>
      <Header />
      <div id="prueba">
        <h1>Ingredientes:</h1>

        {pizzas.map((item) => (
          <CardPizza
            key={item.id}
            desc={item.desc}
            img={item.img}
            ingredients={item.ingredients}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>

      

    </div>
  );
}
