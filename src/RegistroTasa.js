import React from 'react';
import Footer from './layout/Footer'; 
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Aside from './Aside';

const RegistroTasa = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '120vh', backgroundColor: '#ffffff' }}>
      <Header />
      <div className="red-rectangle">
      </div>
      <div className="tasa-rectangle">
        <Aside />
      </div> 
      <Footer />
      <Sidebar/>
    </div>
  );
};

const Tasa00521 = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '120vh', backgroundColor: '#ffffff' }}>
      <Header />
      <div className="tasa-red-rectangle">
        <h1>Registro de Tasa</h1>
        <h2>RENIEC</h2>
        <h3>00521 - EMISIÓN PRIMERA VEZ DNI ELECTRÓNICO</h3>
      </div>
      <div className="tasa-rectangle">
        <form className="tasa-form">
          <div className="form-group">
            <label htmlFor="concepto">CONCEPTO</label>
            <input type="text" id="concepto" className="input-full" value="EMISIÓN PRIMERA VEZ DNI ELECTRÓNICO" readOnly />
          </div>
          <div className="flex-half">
            <div className="form-group">
              <label htmlFor="cantidad">CANTIDAD</label>
              <input type="text" id="cantidad" className="input-full" value="1" readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="costo">COSTO</label>
              <input type="text" id="costo" className="input-full" value="S/. 41" readOnly />
            </div>
          </div>
          <div className="flex-half">
            <div className="form-group">
              <label htmlFor="tipoDocumento">TIPO DE DOCUMENTO</label>
              <input type="text" id="tipoDocumento" className="input-full" value="DNI" readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="numeroDocumento">NUMERO DE DOCUMENTO</label>
              <input
                type="text"
                id="numeroDocumento"
                className="input-full"
                maxLength="8"
                pattern="\d{8}"
                title="Debe ingresar un número de 8 dígitos"
                required
              />
            </div>
          </div>
          <a className="add-cart" href="/cart">Añadir al carrito</a>
        </form>
      </div> 
      <Footer />
      <Sidebar/>
    </div>
  );
};

export { RegistroTasa, Tasa00521 };
