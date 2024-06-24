import React, { useState } from 'react';
import logo from '../assets/logo.svg'; 
import user from '../assets/user.png'; 
import lupa from '../assets/lupa.png'; 
import carrito from '../assets/carrito.png';
import ticket from '../assets/ticket.png';

const Header = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const openRegisterModal = () => {
    setShowRegisterModal(true);
    setShowLoginModal(false);
  };

  const openLoginModal = () => {
    setShowLoginModal(true);
    setShowRegisterModal(false);
  };

  const closeModal = () => {
    setShowRegisterModal(false);
    setShowLoginModal(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    closeModal();
  };

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
                <a href="/Mis-Tickets" className="nav-link d-flex align-items-center">
                  <img src={ticket} alt="Ticket" height="25" style={{ margin: '0 10px' }} />
                  Mis Tickets
                </a>
              </li>
              <li className="nav-item d-flex align-items-center" style={{ margin: '0 10px' }}>
                <a href="/cart" className="nav-link d-flex align-items-center">
                  <img src={carrito} alt="Carrito" height="30" style={{ margin: '0 10px' }} />
                </a>
              </li>
            </ul>
          </div>
          <div className="d-flex align-items-center">
            <a href="#" style={{ marginRight: '10px' }} onClick={openLoginModal}>
              <img src={user} alt="Usuario" height="35" style={{ margin: '0 20px', filter: 'invert(100%)', cursor: 'pointer' }} />
            </a>
          </div>
        </div>
      </nav>

      {/* Modal de Registro */}
      {showRegisterModal && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Registro de Usuario</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="email">Correo Electrónico</label>
                <input type="email" className="form-control" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="documentType">Seleccione Tipo de Documento</label>
                <select className="form-control" id="documentType" name="documentType" required>
                  <option value="">Seleccione Tipo de Documento</option>
                  <option value="carnet">Carnet de Extranjería</option>
                  <option value="dni">DNI</option>
                  <option value="passport">Pasaporte</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="documentNumber">Número de Documento</label>
                <input type="text" className="form-control" id="documentNumber" name="documentNumber" required />
              </div>
              <div className="form-group">
                <label htmlFor="fullName">Nombre Completo</label>
                <input type="text" className="form-control" id="fullName" name="fullName" required />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Número de Celular</label>
                <input type="tel" className="form-control" id="phoneNumber" name="phoneNumber" required />
              </div>
              <div className="form-group">
                <label htmlFor="operator">Seleccione Operador</label>
                <select className="form-control" id="operator" name="operator" required>
                  <option value="">Seleccione Operador</option>
                  <option value="entel">Entel</option>
                  <option value="claro">Claro</option>
                  <option value="bitel">Bitel</option>
                  <option value="movistar">Movistar</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input type="password" className="form-control" id="password" name="password" required />
              </div>
              <button type="submit" className="btn btn-primary">Registrarse</button>
            </form>
          </div>
        </div>
      )}

      {/* Modal de Inicio de Sesión */}
      {showLoginModal && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content-login" onClick={(e) => e.stopPropagation()}>
            <h2>Ingresa a Págalo.pe</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="loginEmail">Correo Electrónico</label>
                <input type="email" className="form-control" id="loginEmail" name="loginEmail" required />
              </div>
              <div className="form-group">
                <label htmlFor="loginPassword">Contraseña</label>
                <input type="password" className="form-control" id="loginPassword" name="loginPassword" required />
              </div>
              <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
            </form>
            <p className="text-center mt-3">
              ¿No tienes una cuenta? <span className="text-primary" style={{cursor: 'pointer'}} onClick={openRegisterModal}>Regístrate</span>
            </p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
