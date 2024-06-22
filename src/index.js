import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import React, { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Footer from './layout/Footer'; 
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Main from './Main';
import Aside from './Aside';

// Componente para la página principal
const HomePage = () => (
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '150vh' }}>
    <Header />
    <div style={{ flex: '1', display: 'flex' }}>
      <div style={{ flex: '1', marginRight: '20px' }}>
        <Main /> 
      </div>
      <div>
        <Aside />
      </div>
    </div>
    <Footer />
    <Sidebar/>
  </div>
);

// Componente para la página de carrito (solo con Header, Main, Aside y Footer)
const CartPage = () => (
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '150vh', backgroundColor: '#ffffff' }}>
    <Header />
    <div className="red-rectangle">
    <h1>Carrito de Compras</h1>
    <h2>0 Artículos Seleccionados</h2>
    </div>
    <div className="cart-rectangle" >
      <li className="add-product" > 
      <a href="/">Agregar un Producto</a>
      </li>
      <Main /> 
    </div> 
    <Aside />
    <Footer />
    <Sidebar/>
  </div>
);

const TicketPage = () => (
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '150vh', backgroundColor: '#ffffff' }}>
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

// Define las rutas
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/Mis-Tickets",
    element: <TicketPage />,
  },
]);

// Renderiza la aplicación
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
