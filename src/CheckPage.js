import React from 'react';
import Footer from './layout/Footer'; 
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';

const CheckPage = () => (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '120vh', backgroundColor: '#ffffff' }}>
      <Header />
      <div className="red-rectangle">
      </div>
      <div className="check-rectangle">
      </div> 
      <Footer />
      <Sidebar/>
    </div>
  );

  export default CheckPage;