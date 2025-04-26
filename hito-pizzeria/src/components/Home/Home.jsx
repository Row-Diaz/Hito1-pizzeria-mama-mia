import React from "react";
import Header from "../Header/Header";
import CardPizza from "../Cards/CardPizza";
import "./Home.css";
import { pizzas } from "../Pizzas/pizzas";

export default function Home() {
  
  return (
    <>
      <Header />
     
        <h1>Ingredientes:</h1>
        <div className="frontal">
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

      

    </>
  );
}
