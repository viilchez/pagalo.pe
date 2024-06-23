import React from 'react';
import Header from './layout/Header';
import Main from './Main';
import Aside from './Aside';
import Footer from './layout/Footer';
import Sidebar from './layout/Sidebar';
import agente from './assets/images.png';
import yape from './assets/yape.png';
import pagoEfectivo from './assets/pago-efectivo.avif';

const PaymentMethod = () => (
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#ffffff' }}>
    <Header />
    <div className="payment-red-rectangle">
      <h1>Método de Pago</h1>
      <h2>Seleccionar Método de Pago</h2>
    </div>
    <div className="payment-info-rectangle">
        <h1>Información</h1>
        <h2>¿Habrá algún cargo adicional?</h2>
        <h3>No, solo se cargará a tu tarjeta el importe de la tasa o servicios que has seleccionado. No se aplicarán cargos adicionales por comisiones u otros gastos financieros. </h3>
    </div>
    <div className="method">
      <p>Tarjeta de Crédito o Débito</p>
      <h1>Otros Métodos</h1>
      <a className="method-multired" >
      <img src={agente} alt="Agente MultiRed" height="150" style={{ marginLeft: '0px' }} />
      </a>
      <a className="method-yape" >
        <img src={yape} alt="Yape" height="160" style={{ marginLeft: '0px' }} />
        </a>
        <a className="method-pago-efectivo" >
        <img src={pagoEfectivo} alt="Pago Efectivo" width="600" style={{ marginLeft: '0px' }} />
        </a>   
      </div>
    <div className="payment-rectangle">
      <form className="payment-form">
        <label htmlFor="cardNumber">Número de Tarjeta:</label>
        <input type="text" id="cardNumber" name="cardNumber" />

        <label htmlFor="cardName">Nombre en la Tarjeta:</label>
        <input type="text" id="cardName" name="cardName" />

        <label htmlFor="expiryDate">Fecha de Expiración:</label>
        <input type="text" id="expiryDate" name="expiryDate" />

        <label htmlFor="cvv">CVV:</label>
        <input type="text" id="cvv" name="cvv" />
        <button type="submit">Pagar</button>
      </form>
    </div>
    <Main />
    <Aside />
    <Footer />
    <Sidebar />
  </div>
);


export default PaymentMethod;
