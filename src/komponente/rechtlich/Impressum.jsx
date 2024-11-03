import './rechtlich.css';
import Footer from '../Footer/footer';

const Impressum = () => {
  return(
    <>
      <section className='impressum'>
      <h1>Impressum </h1>
      <div className="rechtlicher-content">
        <ul>
          <li className='rechtlicher-container'>
            <span>Marko Bodo</span>
            
          </li>
          <li className='rechtlicher-container'>
            <span>Musterstraße 123</span>
          </li>
          <li className='rechtlicher-container'>
            <span>23730 Neustadt in Holstein</span>
          </li>
          <li className='rechtlicher-container'>
            <span>Handelsvertreter für Finanzdienstleistungen</span>
          </li>
          <li className='rechtlicher-container'>
            <span>info@bodo-finanzberatung.de</span>
          </li>
          <li className='rechtlicher-container'>
            <span>015221520644</span>
          </li>
          <li className='rechtlicher-container'>
            <span>Behörde</span>
          </li>
          <li className='rechtlicher-container'>
            <span>Finanzdienstleister</span>
          </li>
        </ul>
      </div>
      
    </section>
    <Footer/>
    </>
    
  
  );
}

export default Impressum