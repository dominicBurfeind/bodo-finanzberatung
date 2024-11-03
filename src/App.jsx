import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Menü from "./komponente/Menü/Menü";
import Home from "./Seiten/Home/Home";
import ÜberUns from "./Seiten/Über/ÜberUns";
import Kontakt from "./Seiten/Kontakt/Kontakt";
import Dienstleistungen from "./Seiten/Dienstleistungen/Dienstleistungen";
import AGB from "./komponente/rechtlich/Agb";
import Impressum from "./komponente/rechtlich/Impressum";
import Datenschutz from "./komponente/rechtlich/Datenschutz";
import Finanzberatung from "./Seiten/Dienstleistungen/Finanzberatung/finanzberatung";
import Versicherungen from "./Seiten/Dienstleistungen/Versicherungen/versicherungen";

const App = () => {
  return (
    <>
      <Router>
        <Menü></Menü>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ÜberUns" element={<ÜberUns />} />
          <Route path="/Kontakt" element={<Kontakt />} />
          <Route path="/Dienstleistungen" element={<Dienstleistungen />} />
          <Route path="/Impressum" element={<Impressum />} />
          <Route path="/Datenschutz" element={<Datenschutz />} />
          <Route path="/Agb" element={<AGB />} />
          <Route path="/finanzberatung" element={<Finanzberatung />} />
          <Route path="/versicherungen" element={<Versicherungen />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
