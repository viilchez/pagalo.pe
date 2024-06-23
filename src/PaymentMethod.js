import React from 'react';
import Header from './layout/Header';
import Main from './Main';
import Aside from './Aside';
import Footer from './layout/Footer';
import Sidebar from './layout/Sidebar';

const PaymentMethod = () => (
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#ffffff' }}>
    <Header />
    <div className="payment-red-rectangle">
      <h1>Método de Pago</h1>
      <h2>Seleccionar Método de Pago</h2>
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
      <div className="paymenbt-rectangle">

      </div>
    </div>
    <Main />
    <Aside />
    <Footer />
    <Sidebar />
  </div>
);

export default PaymentMethod;
