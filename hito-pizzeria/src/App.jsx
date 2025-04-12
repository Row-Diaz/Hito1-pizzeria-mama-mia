import { useState } from "react";
import Header from "./components/Header/header";
import Navbar from "./components/Navbar/Navbar";


function App() {
  const imageURl =
    "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3";
  const altText = "pizza napolitana";

  return (
    <div>
      <div>
        <Navbar />
        <Header />
        <CardPizza imageURl={imageURl} altText={altText} />
        <CardPizza name="Pizza Napolitana" />
        <CardPizza
          ingredients={["mozzarella,", "tomates,", "jamón,", "orégano"]}/>
        <CardPizza price="Precio:$5.950" />
      </div>
    </div>
  );
}

export default App;
