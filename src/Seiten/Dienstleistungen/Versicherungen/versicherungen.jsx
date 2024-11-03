import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../Dienstleistungen.css";
import Footer from "../../../komponente/Footer/footer";

const Versicherungen = () => {
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
      <section className="versicherungen">
        <header className="header">
          <h1>Versicherungen</h1>
          <p>Rundumschutz für Sie und Ihre Familie</p>
        </header>

        <section className="versicherung-content">
          <div className="section right hidden">
            <h2>Absicherung der Familie</h2>
            <div className="section-content">
              <div className="section-content-row1">
                <p>
                  Lebens- und Berufsunfähigkeitsversicherungen schützen Familien
                  vor finanziellen Folgen im Todesfall oder bei
                  Arbeitsunfähigkeit.
                </p>
                <img loading="lazy" src="/absicherung.jpg" alt="" />
              </div>
              <nav>
                <h3>Mit diesem Paket erhalten sie...</h3>
                <ul>
                  <li>
                    <span>&#10003;</span>Risikolebensversicherung
                  </li>
                  <li>
                    <span>&#10003;</span>Berufsunfähigkeitsversicherung
                  </li>
                  <li>
                    <span>&#10003;</span>Private Haftpflichtversicherung für die
                    Familie
                  </li>
                  <li>
                    <span>&#10003;</span>Kranken- und Unfallversicherung
                  </li>
                </ul>
                <Link to="/Kontakt">Jetzt beraten lassen</Link>
              </nav>
            </div>
          </div>

          <div className="section left hidden">
            <h2>Hausrat- und Wohngebäudeversicherung</h2>
            <div className="section-content">
              <div className="section-content-row1">
                <p>
                  Hausrat- und Wohngebäudeversicherungen schützen das Zuhause
                  vor Schäden durch Feuer, Einbruch oder Naturkatastrophen.
                </p>
                <img loading="lazy" src="/wohnung.jpg" alt="" />
              </div>
              <nav>
                <h3>Mit diesem Paket erhalten sie...</h3>
                <ul>
                  <li>
                    <span>&#10003;</span>Hausratversicherung
                  </li>
                  <li>
                    <span>&#10003;</span>Wohngebäudeversicherung
                  </li>
                  <li>
                    <span>&#10003;</span>Erweiterte Elementarschädenabsicherung
                  </li>
                  <li>
                    <span>&#10003;</span>Regelmäßige Versicherungssummenprüfung
                  </li>
                </ul>
                <Link to="/Kontakt">Jetzt beraten lassen</Link>
              </nav>
            </div>
          </div>

          <div className="section right hidden">
            <h2>Rechtsschutzversicherung</h2>
            <div className="section-content">
              <div className="section-content-row1">
                <p>
                  Familienrechtsschutz deckt rechtliche Konflikte ab, z.B. bei
                  Erbschaftsstreitigkeiten, Unfällen oder Mietkonflikten.
                </p>
                <img loading="lazy" src="/rechtschutz.jpg" alt="" />
              </div>
              <nav>
                <h3>Mit diesem Paket erhalten sie...</h3>
                <ul>
                  <li>
                    <span>&#10003;</span>Familienrechtsschutzversicherung
                  </li>
                  <li>
                    <span>&#10003;</span>Verkehrsrechtsschutz
                  </li>
                  <li>
                    <span>&#10003;</span>Mietrechtsschutz oder
                    Immobilienrechtsschutz
                  </li>
                  <li>
                    <span>&#10003;</span>Internet-Rechtsschutz
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

export default Versicherungen;
