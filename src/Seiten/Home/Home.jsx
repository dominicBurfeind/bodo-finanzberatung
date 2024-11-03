import "./Home.css";
import { Link } from "react-router-dom";
import Footer from "../../komponente/Footer/footer";
import React, { useState } from "react";

const Home = () => {
  //Vorteile funktion
  const [hoveredKriterium, setHoveredKriterium] = useState(null);
  const [hoveredFamilienKriterium, setHoveredFamilienKriterium] =
    useState(null);

  const handleMouseEnter = (kriterium) => {
    setHoveredKriterium(kriterium);
  };

  const handleMouseLeave = () => {
    setHoveredKriterium(null);
  };

  const handleFamilienMouseEnter = (kriterium) => {
    setHoveredFamilienKriterium(kriterium);
  };

  const handleFamilienMouseLeave = () => {
    setHoveredFamilienKriterium(null);
  };

  return (
    <>
      <main className="homepage">
        <header>
          <div className="header-content">
            <h1>Ihr Dienstleister für die ganze Familie</h1>
            <p>Von der Vorsorge bis zur Absicherung der ganzen Familie</p>
            <Link className="header-cta" to="/Kontakt">
              Kostenloses Erstgespräch
            </Link>
          </div>
        </header>

        <section className="hp-über-uns">
          <div className="hp-über-uns-content">
            <h2>
              Seit über <span>3 Jahre Beratung</span> aus dem Norden
            </h2>
            <div className="hp-über-uns-img">
              <img loading="lazy" src="/Marko2.jpg.png" alt="" />
            </div>
            <div className="hp-über-uns-text">
              <div className="hp-über-uns-text-content">
                <p>
                  Wir sind Ihr Partner für maßgeschneiderte Finanz- und
                  Versicherungslösungen. Mit Erfahrung, Transparenz und einer
                  unabhängigen Beratung
                  <strong> begleiten wir Sie in jeder Lebensphase </strong> und
                  helfen Ihnen, Ihre finanziellen Ziele zu erreichen
                </p>
                <p>
                  <strong>Ihre finanzielle Sicherheit und Absicherung </strong>
                  stehen bei uns an erster Stelle. Als erfahrene
                  Finanzdienstleister bieten wir Ihnen eine individuelle
                  Beratung, die genau auf Ihre Bedürfnisse zugeschnitten ist. Ob
                  Altersvorsorge, Versicherungen oder Vermögensaufbau – wir
                  unterstützen Sie dabei, die richtigen Entscheidungen zu
                  treffen
                </p>
                <p>
                  Wir legen großen Wert auf eine vertrauensvolle Zusammenarbeit
                  und kontinuierliche Betreuung, um sicherzustellen, dass Ihre
                  Lösungen stets
                  <strong>optimal an Ihre Lebensumstände angepasst </strong>
                  sind.
                </p>
                <p>
                  Mit uns haben Sie einen verlässlichen Partner an Ihrer Seite,
                  der Sie durch die komplexe Welt der Finanzen führt und Ihnen
                  hilft, Ihre Visionen und Träume zu verwirklichen. Ihr Erfolg
                  ist unser Antrieb.
                </p>
                <Link className="kontakt-cta" to="/ÜberUns">
                  Mehr Über Mich
                </Link>
              </div>
            </div>
          </div>
          <div className="hp-über-uns-werte">
            <figure>
              <figcaption>Vertrauen</figcaption>
              <img loading="lazy" src="/trust.png" alt="" />
              <p>
                Ehrlichkeit und Offenheit in jeder Interaktion – Ihr Vertrauen
                ist unser höchstes Gut
              </p>
            </figure>
            <figure>
              <figcaption>Nachhaltigkeit</figcaption>
              <img loading="lazy" src="/eco-light.png" alt="" />
              <p>
                Wir entwickeln Strategien, die Ihre heutigen und zukünftigen
                Bedürfnisse berücksichtigen.
              </p>
            </figure>
            <figure>
              <figcaption>Transparenz</figcaption>
              <img loading="lazy" src="/transparency.png" alt="" />
              <p>
                Verständliche und klare Informationen, damit Sie fundierte
                Entscheidungen treffen können.
              </p>
            </figure>
            <figure>
              <figcaption>Kundenorientierung</figcaption>
              <img loading="lazy" src="/rating.png" alt="" />
              <p>
                Individuelle Lösungen, die perfekt auf Ihre Situation abgestimmt
                sind.
              </p>
            </figure>
          </div>
        </section>

        <section className="kriterium">
          <div className="kriterium-content">
            <div
              className="kriterium-container kriterium1"
              onMouseEnter={() => handleMouseEnter("krit1")}
              onMouseLeave={handleMouseLeave}
            >
              <p>Individuelle Beratung</p>
            </div>
            <div
              className="kriterium-container kriterium2"
              onMouseEnter={() => handleMouseEnter("krit2")}
              onMouseLeave={handleMouseLeave}
            >
              <p>Langfristige Sicherheit</p>
            </div>
            <div
              className="kriterium-container kriterium3"
              onMouseEnter={() => handleMouseEnter("krit3")}
              onMouseLeave={handleMouseLeave}
            >
              <p>Ganzheitliche Familienabsicherung</p>
            </div>
            <div
              className="kriterium-container kriterium4"
              onMouseEnter={() => handleMouseEnter("krit4")}
              onMouseLeave={handleMouseLeave}
            >
              <p>Flexible Tarife für jede Lebensphase</p>
            </div>
          </div>

          <div className="kriterium-text-content">
            {hoveredKriterium === null && (
              <div className="default-content">
                <h2>Ihre Vorteile mit Uns</h2>
              </div>
            )}

            {/* Bedingte Anzeige je nach Hover */}
            {hoveredKriterium === "krit1" && (
              <div className="krit-content">
                <h2>Individuelle Beratung</h2>
                <p>
                  Maßgeschneiderte Lösungen, die auf Ihre persönlichen
                  Bedürfnisse und Lebenssituation abgestimmt sind
                </p>
              </div>
            )}
            {hoveredKriterium === "krit2" && (
              <div className="krit-content">
                <h2>Langfristige Sicherheit</h2>
                <p>
                  Schutz und Vorsorge für alle Lebensphasen – für Sie und Ihre
                  Familie
                </p>
              </div>
            )}
            {hoveredKriterium === "krit3" && (
              <div className="krit-content">
                <h2>Ganzheitliche Familienabsicherung</h2>
                <p>
                  Umfassender Schutz für alle Familienmitglieder – von der
                  Kinderabsicherung bis zur Altersvorsorge.
                </p>
              </div>
            )}
            {hoveredKriterium === "krit4" && (
              <div className="krit-content">
                <h2>Flexible Tarife für jede Lebensphase</h2>
                <p>
                  Angepasste Lösungen, die sich mit dem Wandel Ihrer
                  Familienbedürfnisse entwickeln, ob beim Hauskauf, Nachwuchs
                  oder der Ausbildung der Kinder
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="kriteriumFamilien">
          <div className="kriteriumFamilien-text-content">
            {/* Standardmäßig angezeigter Text */}
            {hoveredFamilienKriterium === null && (
              <h2>Vorteile für die Familie</h2>
            )}

            {/* Bedingte Anzeige je nach Hover */}
            {hoveredFamilienKriterium === "krit1" && (
              <div className="krit-content">
                <h2>Altersvorsorge für Eltern und Kinder</h2>
                <p>
                  Altersvorsorgepläne, die Eltern und Kindern ermöglichen,
                  gemeinsam für die Zukunft zu sparen und Vermögen
                  generationsübergreifend aufzubauen
                </p>
              </div>
            )}
            {hoveredFamilienKriterium === "krit2" && (
              <div className="krit-content">
                <h2>Kombi-Rabatte</h2>
                <p>
                  Sparen Sie durch die Bündelung von Versicherungen wie Hausrat,
                  Haftpflicht und Kfz-Versicherung für alle Familienmitglieder
                </p>
              </div>
            )}
            {hoveredFamilienKriterium === "krit3" && (
              <div className="krit-content">
                <h2>Familienfreundliche Versicherungspakete</h2>
                <p>
                  Flexibel gestaltbare Versicherungslösungen, die den speziellen
                  Bedürfnissen Ihrer Familie entsprechen, wie z. B. Gesundheits-
                  und Unfallversicherungen
                </p>
              </div>
            )}
            {hoveredFamilienKriterium === "krit4" && (
              <div className="krit-content">
                <h2>Bildungsfonds und Sparpläne</h2>
                <p>
                  Langfristige Sparpläne mit attraktiven Renditen, die an die
                  zukünftigen Bildungsbedürfnisse Ihrer Kinder angepasst sind
                </p>
              </div>
            )}
          </div>
          <div className="kriterium-content">
            <div
              className="kriterium-container kriterium1"
              onMouseEnter={() => handleFamilienMouseEnter("krit1")}
              onMouseLeave={handleFamilienMouseLeave}
            >
              <p>Altersvorsorge für Eltern und Kinder</p>
            </div>
            <div
              className="kriterium-container kriterium2"
              onMouseEnter={() => handleFamilienMouseEnter("krit2")}
              onMouseLeave={handleFamilienMouseLeave}
            >
              <p>Kombi-Rabatte</p>
            </div>
            <div
              className="kriterium-container kriterium3"
              onMouseEnter={() => handleFamilienMouseEnter("krit3")}
              onMouseLeave={handleFamilienMouseLeave}
            >
              <p>Familienfreundliche Versicherungspakete</p>
            </div>
            <div
              className="kriterium-container kriterium4"
              onMouseEnter={() => handleFamilienMouseEnter("krit4")}
              onMouseLeave={handleFamilienMouseLeave}
            >
              <p>Bildungsfonds und Sparpläne</p>
            </div>
          </div>
        </section>
        <section className="dienstleistung">
          <h2>Unsere Diensleistungen</h2>
          <div className="dienstleistung-content">
            <div className="dienstleistung-container  dl-container1">
              <img loading="lazy" src="/finanzen.jpg" alt="" />
              <Link to="/finanzberatung">Finanzberatung</Link>
            </div>
            <div className="dienstleistung-container dl-container2">
              <img loading="lazy" src="/consulting.jpg" alt="" />
              <Link to="/versicherungen">Versicherungsberatung</Link>
            </div>
          </div>
        </section>

        <section className="beratung">
          <h2>Starten sie in eine Sichere Zukunft</h2>
          <p>
            Entdecken Sie, wie Sie und Ihre Familie optimal abgesichert sein
            können – wir bieten Ihnen eine unverbindliche Erstberatung an!
          </p>
          <Link to="/Kontakt">Zur Kostenlosen Erstberatung</Link>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
