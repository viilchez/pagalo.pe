import React from 'react';
import logoNegro from '../assets/logo-pagalo.svg';

const Sidebar = () => {
    return (
      <div className="sidebar">
        <div className="logo-container">
          <img src={logoNegro} alt="Logo de tu página" height="50" style={{ marginLeft: '0px' }} />
        </div>
        <div className="postula">
          <span>SIDEBAR</span>
        </div>
      </div>
    );
  };

  export default Sidebar;