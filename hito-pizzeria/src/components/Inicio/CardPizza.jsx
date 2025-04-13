import React from "react";
import "./CardP.css";

const CardPizza = ({ imageUrl, name, price, ingredients }) => {
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
        <button className="verMas">Ver mas👀</button>
        <div>
          <h2 className="valor">{price}</h2>
        </div>
        <button className="anadir">Añadir🛒</button>
      </div>

      
    </>
  );
};

export default CardPizza;
