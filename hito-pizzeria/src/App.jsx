import { useState } from "react";
// import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import FooterJs from "./components/Footer/FooterJs";
import Cart from "./components/Cart/Cart";
//import FormularioRegistro from "./components/FormularioRegistro/FormularioRegistro";
// import FormularioLogin from "./components/FormularioLogin/FormularioLogin";


function App() {
  return (
    <>
      <Navbar />
      {/* <FormularioRegistro /> */}
      {/* <FormularioLogin /> */}
      {/* <Home /> */}
      <Cart />

      <FooterJs />
    </>
  );
}

export default App;
