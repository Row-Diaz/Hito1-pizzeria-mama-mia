
import Home from "./components/views/Home/Home.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import FooterJs from "./components/Footer/FooterJs.jsx";
import { Routes, Route } from "react-router-dom";
import Pizza from "./components/views/Pizza.jsx";
import Cart from "./components/views/Cart/Cart.jsx"
import FormularioRegistro from "./components/views/FormularioRegistro/FormularioRegistro.jsx"
import FormularioLogin from "./components/views/FormularioLogin/FormularioLogin.jsx"
import NotFound from "./components/views/NotFound.jsx";
import ProfileCard from "./components/views/ProfileCard/ProfileCard.jsx"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<FormularioRegistro />} />
        <Route path="/login" element={<FormularioLogin />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route path="/profile" element={<ProfileCard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <FooterJs />
    </>
  );
}

export default App;
