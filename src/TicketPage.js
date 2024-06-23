import React from 'react';
import Footer from './layout/Footer'; 
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Main from './Main';
import Aside from './Aside';

const TicketPage = () => (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '120vh', backgroundColor: '#ffffff' }}>
      <Header />
      <div className="red-rectangle">
      </div>
      <div className="ticket-rectangle">
        <Main />
        <Aside />
      </div> 
      <Footer />
      <Sidebar/>
    </div>
  );

  export default TicketPage;