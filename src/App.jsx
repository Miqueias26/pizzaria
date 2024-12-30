import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

{
  /*LISTA DE COMOPENTES IMPORTADADOS */
}

import Header from "./components/header/header";
import Carrousel from "./components/carrousel/carrousel";
import MainContent from "./components/mainContent/mainContent";
import Card from "./components/cards/card";
import Section from "./components/section/section";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div>
      <Header />
      <Carrousel />
      <MainContent />
      <Card />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
