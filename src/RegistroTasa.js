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
        
      </div> 
      <Footer />
      <Sidebar/>
    </div>
  );
};

export { RegistroTasa, Tasa00521 };
