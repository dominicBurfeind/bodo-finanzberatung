import "./ÜberUns.css";
import Footer from "../../komponente/Footer/footer";
import React, { useState } from "react";

const ÜberUns = () => {
  const [hoveredFakt, setHoveredFakt] = useState(null);
  const [hoveredKontakt, setHoveredKontakt] = useState(null);

  const handleMouseEnter = (fakten) => {
    setHoveredFakt(fakten);
  };

  const handleMouseLeave = () => {
    setHoveredFakt(null);
  };

  const handleFamilienMouseEnter = (fakten) => {
    setHoveredKontakt(fakten);
  };

  const handleFamilienMouseLeave = () => {
    setHoveredKontakt(null);
  };

  return (
    <>
      <section className="about-me">
        <div className="about-me-content">
          <h2>Über Mich</h2>
          <div className="about-me-img">
            <img loading="lazy" src="/marko1.jpg.jpg" alt="Profilbild" />
          </div>
          <div className="about-me-text">
            <p>
              Hallo, ich bin <strong> Marko Bodo</strong>, Ihr
              vertrauenswürdiger Partner in finanziellen Angelegenheiten. Mit
              über 2 Jahren Erfahrung in der Finanzbranche unterstütze ich
              Familien und Einzelpersonen dabei,{" "}
              <strong>
                ihre finanziellen Ziele zu erreichen und ihre Vermögenswerte
                effizient zu verwalten
              </strong>
              . Mein Ziel ist es, maßgeschneiderte Lösungen anzubieten, die auf
              Ihre individuellen Bedürfnisse abgestimmt sind.
            </p>
            <p>
              Als zertifizierter Finanzberater und Versicherungsexperte verfüge
              ich über umfassende Kenntnisse in den Bereichen Finanzplanung,
              Altersvorsorge, Risikomanagement und Investmentstrategien. Ich
              arbeite eng mit meinen Klienten zusammen, um langfristige
              finanzielle Sicherheit und Erfolg zu gewährleisten.
            </p>
          </div>
          <div className="fakten">
            <div className="hp-über-uns-werte">
              <figure className="fakt1">
                <figcaption>Wir legen Wert auf</figcaption>
                <div className="fakt1-content">
                  <div className="fakt-namen">
                    <p
                      onMouseEnter={() => handleMouseEnter("fakt-name1")}
                      onMouseLeave={handleMouseLeave}
                    >
                      Vertrauen
                    </p>

                    <p
                      onMouseEnter={() => handleMouseEnter("fakt-name2")}
                      onMouseLeave={handleMouseLeave}
                    >
                      Nachhaltigkeit
                    </p>

                    <p
                      onMouseEnter={() => handleMouseEnter("fakt-name3")}
                      onMouseLeave={handleMouseLeave}
                    >
                      Transparenz
                    </p>

                    <p
                      onMouseEnter={() => handleMouseEnter("fakt-name4")}
                      onMouseLeave={handleMouseLeave}
                    >
                      Kundenorientierung
                    </p>
                  </div>
                  <div className="fakt-content">
                    {hoveredFakt === "fakt-name1" && (
                      <p className="active">
                        Ihr Vertrauen ist unser höchstes Gut. Wir begleiten Sie
                        und Ihre Familie mit maßgeschneiderten Finanz- und
                        Versicherungslösungen – zuverlässig und sicher. Ihr Wohl
                        steht bei uns an erster Stelle
                      </p>
                    )}
                    {hoveredFakt === "fakt-name2" && (
                      <p className="active">
                        Wir denken an morgen. Mit nachhaltigen Finanzstrategien
                        sorgen wir dafür, dass Ihre Entscheidungen heute die
                        Zukunft Ihrer Familie positiv gestalten. Verantwortung
                        und Weitsicht sind unsere Prinzipien
                      </p>
                    )}
                    {hoveredFakt === "fakt-name3" && (
                      <p className="active">
                        Offen und ehrlich. Bei uns wissen Sie immer, woran Sie
                        sind. Wir legen alle Details klar und verständlich
                        offen, damit Sie die besten Entscheidungen für Ihre
                        Familie treffen können
                      </p>
                    )}
                    {hoveredFakt === "fakt-name4" && (
                      <p className="active">
                        Ihre Bedürfnisse sind unser Kompass. Wir hören zu,
                        verstehen und handeln zu Ihrem Vorteil. Bei uns steht
                        Ihre Familie im Mittelpunkt – mit Lösungen, die wirklich
                        passen
                      </p>
                    )}
                  </div>
                </div>
              </figure>
              <figure className="fakt2">
                <figcaption>Kontakt</figcaption>
                <div className="fakt2-content">
                  <p>
                    <img loading="lazy" src="/marker.svg" alt="" />
                    Musterstraße 1
                    <br />
                    23730 Neustadt
                  </p>
                  <p>
                    <img loading="lazy" src="/phone-call.svg" alt="" />
                    015221520644
                  </p>
                  <p>
                    <img loading="lazy" src="/edit-message.svg" alt="" />
                    info@bodo-finanzberatung.de
                  </p>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default ÜberUns;
