import React from 'react';
import logo from '../assets/logo.svg'

const Sidebar = () => {
    return (
      <div className="sidebar">
        <div className="logo-container">
          <img src={logo} alt="Logo de tu página" height="70" style={{ marginLeft: '30px' }} />
        </div>
        <div className="sidebar-rectangle1">
          <h1>Preguntas Frecuentes</h1>
        </div> 
        <div className="sidebar-rectangle2">
        <h1>Conoce cómo realizar tus trámites</h1>
        </div> 
        <div className="sidebar-rectangle3">
        <h1>Tasas y servicios más buscados en Págalo.pe</h1>
        </div> 
        <div className="sidebar-rectangle4">
        <h1>Tu opinión es importante</h1>
        </div> 
        <div className="sidebar-rectangle5">
        <h1>Términos y Condiciones</h1>
        </div> 
      </div>
    );
  };

  export default Sidebar;