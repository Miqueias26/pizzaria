import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

{
  /*LISTA DE COMOPENTES IMPORTADADOS */
}

import Footer from "./components/footer/footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Nosotros from "./pages/Nosotros";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
