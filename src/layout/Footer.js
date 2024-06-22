import React from 'react';
import logoFooter from '../assets/logoFooter.png'; // Importa la imagen del logo del footer

const Footer = () => {
  return (
    <footer className="footer-custom">
      <div className="footer-content">
        <div className="footer-left">
          <img src={logoFooter} alt="Logo Footer" height="50" style={{ marginRight: '10px' }} />
        </div>
        <div className="footer-right">
          <div className="footer-column">
            <a href="#" className="foot-link">Pagalo.pe</a>
            <a href="#" className="foot-link">¿Qué es?</a>
            <a href="#" className="foot-link">¿Cómo pagar?</a>
            <a href="#" className="foot-link">¿Qué puedo pagar?</a>
          </div>
          <div className="footer-column">
            <a href="#" className="foot-link">Ubicar agencias</a>
            <a href="#" className="foot-link">Preguntas Frecuentes</a>
            <a href="#" className="foot-link">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
