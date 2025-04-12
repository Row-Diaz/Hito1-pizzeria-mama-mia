import React from "react";


const CardPizza = ({ imageUrl, altText, name, price, ingredients }) => {
  return (
    <div>
      <div className="item1">
        <img className="pizza1" src={imageUrl} alt={altText} />

        <h2 className="napolitana">{name}</h2>
        <p className="ingredi">{ingredients}</p>
        <h2 className="precio">{price}</h2>
      </div>
    </div>
  );
};

export default CardPizza;
