import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Kontakt.css";
import Footer from "../../komponente/Footer/footer";

const Kontakt = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_py67kui",
        "template_456k47s",
        form.current,
        "JWdZ9kSTrTTplKs34"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Nachricht erfolgreich gesendet!");
          form.current.reset(); // This will clear the form inputs
        },
        (error) => {
          console.log(error.text);
          alert("Fehler beim Senden der Nachricht.");
        }
      );
  };

  return (
    <>
      <section className="kontakt-formular">
        <h2>Kontaktieren Sie Mich</h2>
        <div className="kontakt-content">
          <div className="kontakt-info">
            <p>
              <img loading="lazy" src="/marko-logo-W.png" alt="" />
            </p>
            <p>Musterstrasse 1, 23730 Neustadt in Holstein</p>
            <p>Tel: 015221520644</p>
            <p>E-Mail: info@bodo-finanzberatung.de</p>
          </div>

          <form ref={form} onSubmit={sendEmail} className="kontakt-form">
            <div className="form-group">
              <label htmlFor="name">Ihr Name</label>
              <input type="text" id="name" name="from_name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Ihre E-Mail</label>
              <input type="email" id="email" name="from_email" required />
            </div>
            <div className="form-group">
              <label htmlFor="service">Dienstleistung</label>
              <select id="service" name="service" required>
                <option value="">Bitte wählen...</option>
                <option value="beratung">Individuelle Finanzberatung</option>
                <option value="investment">Investmentstrategien</option>
                <option value="versicherung">Versicherungsberatung</option>
                <option value="altersvorsorge">Altersvorsorgeplanung</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Ihre Nachricht</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="kontakt-btn">
              Absenden
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Kontakt;
