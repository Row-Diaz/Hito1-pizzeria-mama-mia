import { useState } from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import FooterJs from "./components/Footer/FooterJs";
import FormularioRegistro from "./components/FormularioRegistro/FormularioRegistro";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";

function App() {
  return (
    <>
      <Navbar />
      <FormularioRegistro />
      {/* <FormularioLogin /> */}
      <Home />

      <br />

      <FooterJs />
    </>
  );
}

export default App;
