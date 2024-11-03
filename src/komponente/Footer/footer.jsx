import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return(
    <footer className='footer'>
      <img loading='lazy' src="/marko-logo-W.png" alt="" />
      <table>
        <thead>
          <tr>
            <th>Unternehmen</th>
            <th>Rechtliches</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><Link to="/ÜberUns">Über Mich</Link></td>
            <td><Link to="/impressum/">Impressum</Link></td>
          </tr>
          <tr>
            <td><Link to="/Dienstleistungen">Meine Dienstleistungen</Link></td>
            <td><Link to="/datenschutz">Datenschutz</Link></td>
          </tr>
          <tr>
            <td><Link to="/Kontakt">Beratung Buchen</Link></td>
            <td><Link to="/agb">AGB</Link></td>
          </tr>
        </tbody>
      </table>
    </footer>
  );
}

export default Footer