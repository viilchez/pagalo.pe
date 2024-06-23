import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';
import Header from './layout/Header';
import Main from './Main';
import Aside from './Aside';
import Footer from './layout/Footer';
import Sidebar from './layout/Sidebar';
import agente from './assets/images.png';
import yape from './assets/yape.png';
import pagoEfectivo from './assets/pago-efectivo.avif';
import cargandoGif from './assets/cargando.gif'; // Asegúrate de tener este archivo

const PaymentMethod = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/comprobante-pago');
    }, 3000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#ffffff' }}>
      <Header />
      <div className="payment-red-rectangle">
        <h1>Método de Pago</h1>
        <h2>Seleccionar Método de Pago</h2>
      </div>
      <div className="payment-info-rectangle">
        <h1>Información</h1>
        <h2>¿Habrá algún cargo adicional?</h2>
        <h3>No, solo se cargará a tu tarjeta el importe de la tasa o servicios que has seleccionado. No se aplicarán cargos adicionales por comisiones u otros gastos financieros.</h3>
      </div>
      <div className="method">
        <p>Tarjeta de Crédito o Débito</p>
        <h1>Otros Métodos</h1>
        <a className="method-multired">
          <img src={agente} alt="Agente MultiRed" height="150" style={{ marginLeft: '0px' }} />
        </a>
        <a className="method-yape">
          <img src={yape} alt="Yape" height="160" style={{ marginLeft: '0px' }} />
        </a>
        <a className="method-pago-efectivo">
          <img src={pagoEfectivo} alt="Pago Efectivo" width="600" style={{ marginLeft: '0px' }} />
        </a>
      </div>
      <div className="payment-rectangle">
        <form className="payment-form" onSubmit={handleSubmit}>
          <label htmlFor="cardNumber">Número de Tarjeta:</label>
          <InputMask
            mask="9999 9999 9999 9999"
            value={cardNumber}
            onChange={handleCardNumberChange}
            maskChar={null}
            placeholder="XXXX XXXX XXXX XXXX"
          >
            {(inputProps) => <input {...inputProps} type="text" id="cardNumber" name="cardNumber" />}
          </InputMask>

          <label htmlFor="cardName">Nombre en la Tarjeta:</label>
          <input type="text" id="cardName" name="cardName" />

          <label htmlFor="expiryDate">Fecha de Expiración:</label>
          <InputMask
            mask="99/9999"
            value={expiryDate}
            onChange={handleExpiryDateChange}
            maskChar={null}
            placeholder="MM/YYYY"
          >
            {(inputProps) => <input {...inputProps} type="text" id="expiryDate" name="expiryDate" />}
          </InputMask>

          <label htmlFor="cvv">CVV:</label>
          <InputMask
            mask="999"
            value={cvv}
            onChange={handleCvvChange}
            maskChar={null}
            placeholder="CVV"
          >
            {(inputProps) => <input {...inputProps} type="text" id="cvv" name="cvv" />}
          </InputMask>
          <button type="submit">Pagar</button>
          {loading && <img src={cargandoGif} alt="Cargando..." style={{ marginLeft: '57px', verticalAlign: 'middle' }} />}
        </form>
      </div>
      <Main />
      <Aside />
      <Footer />
      <Sidebar />
    </div>
  );
};

export default PaymentMethod;
