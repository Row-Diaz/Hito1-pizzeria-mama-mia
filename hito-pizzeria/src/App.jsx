import { useState } from "react";
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/Navbar";
import CardPizza from "./components/Inicio/CardPizza";

function App() {
  const imageUrl =
    "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c";

  return (
    <>
      <Navbar />
      <Header />
      <br />
      <div className="cards">
        <div className="card1">
          <CardPizza
            imageUrl={imageUrl}
            name="Pizza Napolitana"
            title="Ingredientes"
            ingredients={["🍕 mozzarella,", "tomates,", "jamón,", "orégano"]}
            price="Precio:$5.950"
          />
        </div>

        <div className="card2">
          <CardPizza
            imageUrl={imageUrl}
            name="Pizza Napolitana"
            title="Ingredientes"
            ingredients={["🍕 mozzarella,", "tomates,", "jamón,", "orégano"]}
            price="Precio:$5.950"
          />
        </div>
      </div>
    </>
  );
}

export default App;
