import React from 'react';
import Footer from './layout/Footer'; 
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import logo from './assets/BANCO DE LA NACION.png';
import check from './assets/green-check.png'

const CheckPage = () => (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '120vh', backgroundColor: '#ffffff' }}>
      <Header />
      <div className="check-red-rectangle">
      </div>
      <div className="check-rectangle">
          <img src={logo} alt="Logo Banco de la Nación" height="50" style={{ marginLeft: '30px' }} />
          <h3>Leoncio Huacacolqui Cruzado</h3>
          <h3 style={{ marginTop: '30px' }}>Usuario:lhuacacolquic@gmail.com</h3>
          <img src={check} alt="Check verde" height="70" style={{ marginLeft: '500px' }} />
          <h4>¡Felicitaciones!, su pago ha sido exitoso</h4>
          <h5 style={{ marginTop: '10px' }}>Marca de Tarjeta: </h5>
          <h5 style={{ marginTop: '50px' }}>Número de Pedido:</h5>
          <h5 style={{ marginTop: '90px' }}>Titular de Tarjeta:</h5>
          <h5 style={{ marginTop: '130px' }}>Número de Tarjeta:</h5>
          <h5 style={{ marginTop: '170px' }}>Fecha:</h5>
          <h5 style={{ marginTop: '210px' }}>Importe:</h5>
          <h5 style={{ marginTop: '250px' }}>Moneda:</h5>
          <h5 style={{ marginTop: '290px' }}>Producto:</h5>
          <h5 style={{ marginTop: '330px' }}>Entidad:</h5>
          <h6 style={{ marginTop: '10px' }}>VISA</h6>
          <h6 style={{ marginTop: '50px' }}>89as4f798</h6>
          <h6 style={{ marginTop: '90px' }}>Leoncio Huacacolqui Cruzado</h6>
          <h6 style={{ marginTop: '130px' }}>4347699988887777</h6>
          <h6 style={{ marginTop: '170px' }}>25/06/2024</h6>
          <h6 style={{ marginTop: '210px' }}>41.00</h6>
          <h6 style={{ marginTop: '250px' }}>Soles</h6>
          <h6 style={{ marginTop: '290px' }}>Emisisón primera vez DNI electrónico</h6>
          <h6 style={{ marginTop: '330px' }}>RENIEC</h6>
      </div> 
      <Footer />
      <Sidebar/>
    </div>
  );

  export default CheckPage;