import React from 'react';
import Footer from './layout/Footer'; 
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Aside from './Aside';

const CartPage = () => (
  <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff', minHeight: '120vh'}}>
    <Header />
    <div className="red-rectangle">
      <h1>Carrito de Compras</h1>
      <h2>1 Artículos Seleccionados</h2>
    </div>
    <div className="cart-rectangle">
      <div className="tabla-products">
        <a>#</a>
        <a>ENTIDAD</a>
        <a>TASA-DESCRIPCIÓN</a>
        <div className="last-items">
          <a>COSTO</a>
          <a>DOCUMENTO</a>
          <a>OPCIONES</a>
        </div>
      </div>
      <div className="products">
        <div className="left-group">
          <p>1</p>
          <p>RENIEC</p>
          <p>00521 - Emisión primera vez DNI electrónico</p>
        </div>
        <div className="right-group">
          <p>S/ 41.0</p>
          <p>DNI - 12345678</p>
          <p>Options</p>
        </div>
      </div>
      <a className="payment" href="/Metodo-pago">Pagar</a>
    </div>
    <Aside />
    <Footer />
    <Sidebar />
  </div>
);

  export default CartPage;