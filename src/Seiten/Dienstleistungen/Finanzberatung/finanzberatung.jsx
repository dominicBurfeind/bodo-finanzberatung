import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../Dienstleistungen.css";
import Footer from "../../../komponente/Footer/footer";

const Finanzberatung = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const isLeft = element.classList.contains("left");

          element.classList.add(isLeft ? "show-left" : "show-right");
          observer.unobserve(element);
        }
      });
    });

    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <>
      <section className="finanzberatung">
        <header className="header">
          <h1>Finanzberatung</h1>
          <p>Ihr Weg zu einer soliden finanziellen Zukunft</p>
        </header>

        <section className="finanz-content">
          <div className="section left hidden">
            <h2>Vermögensaufbau und -planung</h2>
            <div className="section-content">
              <div className="section-content-row1">
                <p>
                  Familien brauchen klare Spar- und Investitionsstrategien, um
                  finanzielle Ziele zu erreichen. Individuelle Pläne helfen,
                  Ausgaben zu optimieren und Vermögen langfristig zu sichern.
                </p>
                <img loading="lazy" src="/planung.jpg" alt="" />
              </div>
              <nav>
                <h3>Mit diesem Paket erhalten sie...</h3>
                <ul>
                  <li>
                    <span>&#10003;</span>Umfassende Haushaltsanalyse
                  </li>
                  <li>
                    <span>&#10003;</span>Risikoprofilanalyse
                  </li>
                  <li>
                    <span>&#10003;</span>Individuelle Spar- und
                    Investitionspläne
                  </li>
                  <li>
                    <span>&#10003;</span>Liquiditätsmanagement
                  </li>
                </ul>
                <Link to="/Kontakt">Jetzt beraten lassen</Link>
              </nav>
            </div>
          </div>

          <div className="section right hidden">
            <h2>Bildungs- und Ausbildungsfinanzierung</h2>
            <div className="section-content">
              <div className="section-content-row1">
                <p>
                  Frühzeitige Sparpläne und staatliche Förderungen ermöglichen
                  es Familien, die Ausbildung ihrer Kinder ohne finanzielle
                  Belastung zu planen.
                </p>
                <img loading="lazy" src="/ausbildung.jpg" alt="" />
              </div>

              <nav>
                <h3>Mit diesem Paket erhalten sie...</h3>
                <ul>
                  <li>
                    <span>&#10003;</span>Bildungssparpläne für Kinder
                  </li>
                  <li>
                    <span>&#10003;</span>Beratung zu staatlichen Förderungen
                  </li>
                  <li>
                    <span>&#10003;</span>Finanzierung von Auslandsaufenthalten
                  </li>
                  <li>
                    <span>&#10003;</span>Kapitalaufbau für spätere
                    Bildungsinvestitionen
                  </li>
                </ul>
                <Link to="/Kontakt">Jetzt beraten lassen</Link>
              </nav>
            </div>
          </div>

          <div className="section left hidden">
            <h2>Altersvorsorge für Familien</h2>
            <div className="section-content">
              <div className="section-content-row1">
                <p>
                  Eine gute Altersvorsorge schützt nicht nur die Eltern, sondern
                  sichert die ganze Familie. Regelmäßige Anpassungen und
                  staatliche Förderungen helfen, Versorgungslücken zu schließen.
                </p>
                <img loading="lazy" src="/rente.jpg" alt="" />
              </div>

              <nav>
                <h3>Mit diesem Paket erhalten sie...</h3>
                <ul>
                  <li>
                    <span>&#10003;</span>Beratung zu staatlich geförderten
                    Produkten
                  </li>
                  <li>
                    <span>&#10003;</span>Bedarfsanalyse und
                    Rentenlückenberechnung
                  </li>
                  <li>
                    <span>&#10003;</span>Vorsorge für den Partner und die Kinder
                  </li>
                  <li>
                    <span>&#10003;</span>Regelmäßige Anpassung der Vorsorgepläne
                  </li>
                </ul>
                <Link to="/Kontakt">Jetzt beraten lassen</Link>
              </nav>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Finanzberatung;
