import { useState } from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import CardPizza from "./components/Cards/CardPizza";
import FooterJs from "./components/Footer/FooterJs";
import FormularioRegistro from "./components/FormularioRegistro/FormularioRegistro";

function App() {
  const imageUrl =
    "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c";

  const imageUrl1 =
    "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab";

  const imageUrl2 =
    "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3";
  return (
    <>
      <Navbar />
      <Header />
      <FormularioRegistro />

      <br />
      <div className="cards">
        <div className="card1">
          <CardPizza
            imageUrl={imageUrl}
            name="Pizza Napolitana"
            ingredients={["🍕 mozzarella,", "tomates,", "jamón,", "orégano"]}
            price="Precio:$5.950"
          />
        </div>

        <div className="card2">
          <CardPizza
            imageUrl={imageUrl1}
            name="Pizza Española"
            ingredients={[
              "🍕 mozzarella,",
              "gorgonzola,",
              "parmesano,",
              "provolone",
            ]}
            price="Precio:$6.950"
          />
        </div>

        <div className="card3">
          <CardPizza
            imageUrl={imageUrl2}
            name="Pizza Peperoni"
            ingredients={["🍕 mozzarella,", "pepperoni", "orégano"]}
            price="Precio:$6.950"
          />
        </div>
      </div>

      <FooterJs />
    </>
  );
}

export default App;
