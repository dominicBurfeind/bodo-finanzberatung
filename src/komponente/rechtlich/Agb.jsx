import './rechtlich.css';
import Footer from '../Footer/footer';

const AGB = () => {
  return(
    <>
    <section className='agb'>
      <h1>Allgemeine Geschäftsbedingungen </h1>
      <div className="rechtlicher-content">
        <ol>
          <li className='rechtlicher-container'>
            <span>Geltungsbereich</span>
            <p>
              Diese AGB gelten für alle Verträge, die zwischen Marko Kokainovic und unseren Kunden geschlossen werden.
            </p>
          </li>
          <li className='rechtlicher-container'>
            <span>Vertragsabschluss</span>
            <p>
              Ein Vertrag kommt zustande, wenn wir Ihre Bestellung schriftlich bestätigen oder die Dienstleistung erbringen
            </p>
          </li>
          <li className='rechtlicher-container'>
            <span>Leistungen</span>
            <p>
              Wir bieten [Beschreibung Ihrer Dienstleistungen]. Details werden im individuellen Vertrag festgelegt.
            </p>
          </li>
          <li className='rechtlicher-container'>
            <span>Preise und Zahlungsbedingungen</span>
            <p>
              Die Preise richten sich nach der jeweils gültigen Preisliste. Zahlungen sind innerhalb von [Zahlungsfrist] Tagen nach Rechnungsstellung fällig.
            </p>
          </li>
          <li className='rechtlicher-container'>
            <span>Widerrufsrecht</span>
            <p>
              Kunden haben das Recht, den Vertrag innerhalb von 14 Tagen ohne Angabe von Gründen zu widerrufen.
            </p>
          </li>
          <li className='rechtlicher-container'>
            <span>Haftung</span>
            <p>
              Wir haften nur für Schäden, die auf vorsätzliche oder grob fahrlässige Pflichtverletzungen zurückzuführen sind.
            </p>
          </li>
          <li className='rechtlicher-container'>
            <span>Datenschutz</span>
            <p>
              Wir verarbeiten personenbezogene Daten gemäß unserer Datenschutzerklärung.
            </p>
          </li>
        </ol>
      </div>
    </section>
    <Footer />
    </>
  );
}

export default AGB