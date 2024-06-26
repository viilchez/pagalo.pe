import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import React, { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Footer from './layout/Footer'; 
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Main from './Main';
import CartPage from './CartPage';
import TicketPage from './TicketPage';
import PaymentMethod from './PaymentMethod';
import CheckPage from './CheckPage';
import { RegistroTasa, Tasa00521 } from './RegistroTasa'; // Importa correctamente

// Componente para la página principal
const HomePage = () => (
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '120vh' }}>
    <Header />
    <div style={{ flex: '1', display: 'flex' }}>
      <div style={{ flex: '1', marginRight: '20px' }}>
        <Main /> 
      </div>
      <div>
      </div>
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
    path: "cart",
    element: <CartPage />,
  },
  {
    path: "Mis-Tickets",
    element: <TicketPage />,
  },
  {
    path: "Metodo-pago",
    element: <PaymentMethod />,
  },
  {
    path: "comprobante-pago",
    element: <CheckPage />,
  },
  {
    path: "registro-tasa",
    element: <RegistroTasa />,
  },
  {
    path: "/registro-tasa/00521",
    element: <Tasa00521 />, // Usa el nombre correcto del componente
  },
]);

// Renderiza la aplicación
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
