import React from 'react';
import logo from '../assets/logo.svg'; 
import user from '../assets/user.png'; 
import lupa from '../assets/lupa.png'; 
import carrito from '../assets/carrito.png';
import ticket from '../assets/ticket.png';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light header-custom">
        <div className="container">
          <a className="navbar-brand" href="/" style={{ paddingLeft: '0' }}>
            <img src={logo} alt="Logo de tu página" height="50" style={{ marginLeft: '0px' }} />
          </a>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav d-flex align-items-center">
              <li className="nav-item" style={{ margin: '0 10px' }}>
                <a className="nav-link" href="/">Inicio</a>
              </li>
              <li className="nav-item d-flex align-items-center" style={{ margin: '0 10px' }}>
                <a href="/" className="nav-link d-flex align-items-center">
                  <img src={lupa} alt="Buscar" height="25" style={{ margin: '0 10px' }} />
                  Buscar
                </a>
              </li>
              <li className="nav-item d-flex align-items-center" style={{ margin: '0 10px' }}>
                <a href="Mis-Tickets" className="nav-link d-flex align-items-center">
                  <img src={ticket} alt="Ticket" height="25" style={{ margin: '0 10px' }} />
                  Mis Tickets
                </a>
              </li>
              <li className="nav-item d-flex align-items-center" style={{ margin: '0 10px' }}>
                <a href="cart" className="nav-link d-flex align-items-center">
                  <img src={carrito} alt="Carrito" height="30" style={{ margin: '0 10px' }} />
                </a>
              </li>
            </ul>
          </div>
          <div className="d-flex align-items-center">
            <a href="#" style={{ marginRight: '10px' }}>
              <img src={user} alt="Usuario" height="35" style={{ margin: '0 20px', filter: 'invert(100%)', cursor: 'pointer' }} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
