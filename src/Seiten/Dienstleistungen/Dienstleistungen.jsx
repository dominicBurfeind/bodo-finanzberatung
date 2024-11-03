import "./Dienstleistungen.css";
import Footer from "../../komponente/Footer/footer";
import { Link } from "react-router-dom";

const Dienstleistungen = () => {
  return (
    <>
      <section className="Dl-seite">
        <h1>Unsere Dienstleistungen</h1>
        <p>
          Individuelle Finanz- und Versicherungslösungen, die Vertrauen,
          Transparenz und Nachhaltigkeit vereinen – für eine sichere Zukunft
          Ihrer Familie
        </p>
        <div className="Dl-seite-content">
          <Link to="/finanzberatung">
            <div className="Dl-seite-container">
              <img loading="lazy" src="/finance.jpg" alt="" />
              <p>Finanzdienstleistungen</p>
            </div>
          </Link>
          <Link to="/versicherungen">
            <div className="Dl-seite-container">
              <img loading="lazy" src="/versicherung.jpg" alt="" />
              <p>Versicherungen</p>
            </div>
          </Link>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Dienstleistungen;
