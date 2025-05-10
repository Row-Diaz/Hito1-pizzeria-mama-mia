import { useState } from "react";
import Home from "./components/views/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import FooterJs from "./components/Footer/FooterJs";
// import Pizza from "./components/Pizzas/Pizza.jsx";
// import Cart from "./components/Cart/Cart";
//import FormularioRegistro from "./components/FormularioRegistro/FormularioRegistro";
// import FormularioLogin from "./components/FormularioLogin/FormularioLogin";


function App() {
  return (
    <>
      <Navbar />
      {/* <FormularioRegistro /> */}
      {/* <FormularioLogin /> */}
      <Home />
      {/* <Cart /> */}
      {/* <Pizza /> */}

      <FooterJs />
    </>
  );
}

export default App;
