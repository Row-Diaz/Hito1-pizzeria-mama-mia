import React from "react";
import "./CardP.css";

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="container">
      <card className="card-model">
        <div className="pizza-img">
          <img id="pizzas" src={img} />
          <title>{name}</title>
        </div>

        <div className="sabores" style={{ listStyleType: "none", padding: 0 }}>
          <div className="card-title">
            <p>INGREDIENTES</p>
          </div>
          <div className="saboresMap">
          {ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
          </div>
        </div>

        {/* <div>
            <p>
              🍕
              {ingredients}
            </p>
          </div> */}

        <div className="amounts">
          <h2 className="valor">
            <strong>Precio: </strong>
            {price} CLP
          </h2>
          <div className="prueba">
            <div className="btns">
              <button className="verMas">Ver mas👀</button>
            </div>

            <div className="btns2">
              <button className="anadir">Añadir🛒</button>
            </div>
          </div>
        </div>
      </card>
    </div>
  );
};

export default CardPizza;
