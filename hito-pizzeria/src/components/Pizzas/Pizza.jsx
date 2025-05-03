import { useState, useEffect } from "react";
import "../Cards/Cardp.css";

function PizzaCard() {
  const [pizzas, setPizza] = useState([]);
  const [selectedPizza, setSelectedPizza] = useState(null);

  async function fetchPizza() {
    try {
      const response = await fetch("http://localhost:5000/api/pizzas");
      const data = await response.json();

      setPizza(data);

      // Filtrar la pizza con ID "p001" si existe
      const pizzaEncontrada = data.find((pizza) => pizza.id === "p001");
      setSelectedPizza(pizzaEncontrada || null);
    } catch (error) {
      alert("Ha ocurrido un error inesperado.");
    }
  }

  useEffect(() => {
    fetchPizza();
  }, []);

  // Verifica que haya datos antes de renderizar
  if (!selectedPizza)
    return <p>Cargando o no se encontró la pizza con ID "p001"...</p>;

  return (
    <div className="ppal">
      <div className="container">
        <div className="card-model">
          <div className="pizza-img">
            <img id="pizzas" src={selectedPizza.img} alt={selectedPizza.name} />
            <h2>{selectedPizza.name}</h2>
          </div>

          <div
            className="sabores"
            style={{ listStyleType: "none", padding: 0 }}
          >
            <div className="card-title">
              <p>INGREDIENTES</p>
            </div>
            <div className="saboresMap">
              🍕
              {selectedPizza.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </div>
          </div>

          <div className="amounts">
            <h2 className="valor">
              <strong>Precio: </strong>
              {selectedPizza.price} CLP
            </h2>
            <div className="prueba">
              <div className="btns">
                <button className="verMas">Ver más 👀</button>
              </div>

              <div className="btns2">
                <button className="anadir">Añadir 🛒</button>
              </div>
            </div>
          </div>

          <div className="description">{selectedPizza.desc}</div>
        </div>
      </div>
    </div>
  );
}

export default PizzaCard;
