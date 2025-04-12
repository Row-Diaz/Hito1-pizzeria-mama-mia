import React from "react";


const CardPizza = ({ imageURl, altText, name, price, ingredients }) => {
  return (
    <div>
      <div className="item1">
        <img className="pizza1" src={imageURl} alt={altText} />

        <h1 className="napolitana">{name}</h1>
        <p className="ingredi">{ingredients}</p>
        <h1 className="precio">{price}</h1>
      </div>
    </div>
  );
};

export default CardPizza;
