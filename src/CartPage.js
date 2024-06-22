import React from 'react';
import Footer from './layout/Footer'; 
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Main from './Main';
import Aside from './Aside';

const CartPage = () => (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '150vh', backgroundColor: '#ffffff' }}>
      <Header />
      <div className="red-rectangle">
        <h1>Carrito de Compras</h1>
        <h2>1 Artículos Seleccionados</h2>
      </div>
      <div className="cart-rectangle">
        <div className="tabla-products">
          <a href="#">#</a>
          <a href="#">ENTIDAD</a>
          <a href="#">TASA-DESCRIPCIÓN</a>
          <div className="last-items">
            <a href="#">COSTO</a>
            <a href="#">DOCUMENTO</a>
            <a href="#">OPCIONES</a>
          </div>
        </div>
        <div className="products">
          <p>1</p>
          <p>RENIEC</p>
          <p>00521 - Emisión primera vez DNI electrónico</p>
          <p>S/ 41.0</p>
          <p>DNI - 12345678</p>
        </div>
      </div>
      <Main />
      <Aside />
      <Footer />
      <Sidebar />
    </div>
  );

  export default CartPage;