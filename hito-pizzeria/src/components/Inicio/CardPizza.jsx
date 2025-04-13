import React from "react";
import "./CardP.css";

const CardPizza = ({
  title = "ingredientes",
  imageUrl,
  name,
  price,
  ingredients,
}) => {
  return (
    <>
      <div id="ppal">
        <img id="pizzaNap" src={imageUrl} />
        <h2>{name}</h2>
      </div>
      <div className="sabores">
      <p> {ingredients}</p>
      </div>
      
      <div className="amounts">
        <h2>{price}</h2>
      </div>
    </>
  );
};

export default CardPizza;
