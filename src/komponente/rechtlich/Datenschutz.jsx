import './rechtlich.css';
import Footer from '../Footer/footer';


const Datenschutz = () => {
  return(
    <>
    <section className='datenschutz'>
      <h1>Datenschutzerklärung </h1>
      <div className="rechtlicher-content">
        <ol>
          <li className='rechtlicher-container'>
            <span>Verantwortlicher für die Datenverarbeitung</span>
            <p>
              [Ihr Firmenname, Adresse, E-Mail, Telefon]
            </p>
          </li>
          <li className='rechtlicher-container'>
            <span>Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck der Verwendung</span>
            <p>
              Wenn Sie unsere Dienstleistungen in Anspruch nehmen, erheben wir folgende Daten:

            Name, Anschrift, E-Mail-Adresse, Telefonnummer
            Bankdaten für Zahlungszwecke
            Diese Daten werden zur Erfüllung des Vertrags und zur Abwicklung der Geschäftsbeziehung benötigt.
            </p>
          </li>
          <li className='rechtlicher-container'>
            <span>Weitergabe von Daten an Dritte</span>
            <p>
              Eine Weitergabe Ihrer personenbezogenen Daten an Dritte erfolgt nur, wenn dies zur Vertragserfüllung notwendig ist, wie z.B. an Zahlungsdienstleister.
            </p>
          </li>
          <li className='rechtlicher-container'>
            <span>Rechte der betroffenen Personen</span>
            <p>
              Sie haben das Recht auf Auskunft über Ihre gespeicherten personenbezogenen Daten, auf Berichtigung, Löschung oder Einschränkung der Verarbeitung und auf Datenübertragbarkeit.
            </p>
          </li>
          <li className='rechtlicher-container'>
            <span>Datensicherheit</span>
            <p>
              Wir setzen technische und organisatorische Maßnahmen ein, um Ihre Daten gegen Verlust, Missbrauch oder unbefugten Zugriff zu schützen.
            </p>
          </li>
          <li className='rechtlicher-container'>
            <span>Änderungen der Datenschutzerklärung</span>
            <p>
              Wir behalten uns das Recht vor, diese Datenschutzerklärung jederzeit zu ändern. Die aktuelle Version ist auf unserer Website verfügbar.
            </p>
          </li>
        </ol>
      </div>
    </section>
    <Footer />
    </>
  );
}

export default Datenschutz