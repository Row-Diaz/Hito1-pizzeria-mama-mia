import React from "react";
import "./CardP.css";

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="container">
      <card className="card-model">
        <div className="pizza-img">
          <img id="pizzaNap" src={img} />
          <h2>{name}</h2>
      </div>

      <div className="sabores">
        <div className="ingre-items">
        <p>🍕INGREDIENTES</p>
        <p> {ingredients }
          {/* {ingredients.map((item , index) => (
            <li key={index} >{item}</li>
          ))} */}
        </p>
        </div>
      </div>

      <div className="amounts">
        <button className="verMas">Ver mas👀</button>
        <div>
          <h2 className="valor">{price}</h2>
        </div>
        <button className="anadir">Añadir🛒</button>
      </div>

      </card>
    </div>
  );
};

export default CardPizza;
