import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import carrusel1 from './assets/carrusel1.png'
import carrusel2 from './assets/carrusel2.png'
import carrusel3 from './assets/carrusel3.png'
import carrusel4 from './assets/carrusel4.png'

const Main = () => {
  const [searchText, setSearchText] = useState('');
  const [results] = useState([
    '(RENIEC) 00521 - Emisión primera vez DNI electrónico',
    '(RENIEC) 00522 - Duplicado DNI electrónico',
    '(RENIEC) 00523 - Duplicado DNI (a partir de 17 años de edad)',
    '(RENIEC) 00524 - Inscripción ordinaria DNI electrónico - Personas mayores de 18 años',
    '(RENIEC) 00525 - Renovación de DNI electrónico',
    '(RENIEC) 00529 - Emisión de Certificados Digitales para entidades de la Admninistración Pública',
    '(RENIEC) 00530 - Emisión de nuevos certificados digitales en el DNI electrónico',
    '(PODER JUDICIAL) 03670 - Certificado antecedentes penales',
    '(PODER JUDICIAL) 07003 - Proceso de evaluación y selección de Jueces Supernumerarios',
    '(PODER JUDICIAL) 07005 - Reintegro',
    '(PODER JUDICIAL) 07006 - Expedición de certificado de deudor alimentario moroso',
    '(PODER JUDICIAL) 07007 - Expedición de Certificado de Homonimia',
    '(MIGRACIONES) 00673 - Fraccionamiento de Multas',
    '(MIGRACIONES) 00674 - Multa a Ciudadanos Nacionales',
    '(MIGRACIONES) 00675 - Multa Extranjeros - Exceso Permanencia (Por Día)',
    '(MIGRACIONES) 00676 - Multa Extranjeros - Uso de más de una Nacionalidad por Ingreso',
    '(MIGRACIONES) 00677 - Multa Extranjeros - No actualizar Carné de Extranjería (Por Mes)',
    '(MIGRACIONES) 00678 - Multa Extranjeros - No solicitar prórroga del plazo de permanencia de calidad migratoria residente (Por Día)',
    '(MIGRACIONES) 00679 - Multa Extranjeros - Realización de actividades que no corresponden a migraciones',
    '(MIGRACIONES) 00680 - Multa Empresa Transporte Internacional - No actualizar Registro y Control de Tripulación',
    '(POLICÍA NACIONAL DEL PERÚ) 07081 - A01 - No respetar el mínimo de 01 metro de distancia obligatoria',
    '(POLICÍA NACIONAL DEL PERÚ) 07082 - B01 - Salir más de 1 persona por familia por víveres o medicamentos',
    '(POLICÍA NACIONAL DEL PERÚ) 07083 - B02 - Circular para realizar actividades no autorizadas',
    '(POLICÍA NACIONAL DEL PERÚ) 07084 - B03 - Circular sin pase laboral',
    '(POLICÍA NACIONAL DEL PERÚ) 07085 - B04 - Desarrollar actividades económicas no consideradas de prestación y acceso esencial',
    '(POLICÍA NACIONAL DEL PERÚ) 07086 - B05 - Circular con vehículo de uso particular sin autorización',
    '(POLICÍA NACIONAL DEL PERÚ) 07087 - B06 - No usar mascarilla',
    '(POLICÍA NACIONAL DEL PERÚ) 07088 - C01 - No respetar inmovilización social día domingo',
    '(POLICÍA NACIONAL DEL PERÚ) 07089 - C02 - Desarrollar actividades de aglomeración o concurrencia masiva en la vía pública',
    '(POLICÍA NACIONAL DEL PERÚ) 07090 - C03 - No respetar inmovilización de 06.00 pm a 4.00 am o de 4.00 pm a 4.00 am, según corresponda',
    '(MINISTERIO DE TRANSPORTES Y COMUNICACIONES) 00192 - Permiso de Transporte Acuático',
    '(MINISTERIO DE TRANSPORTES Y COMUNICACIONES) 00197 - Expedición de Constancia de Fletamento de Naves de Bandera Extranjera',
    '(GOBIERNO REGIONAL DEL CALLAO) 09421 - Callao - Licencia de Conducir',
    '(GOBIERNO REGIONAL DEL CALLAO) 09422 - Callao - Canje de Licencia de Conducir Militar o Policial',
    '(GOBIERNO REGIONAL DEL CALLAO) 09423 - Callao - Canje de Licencia de Conducir otorgada en otro país',
    '(GOBIERNO REGIONAL DEL CALLAO) 09425 - Callao - Autorización/Renovación/Modificación establecimiento salud para exámenes de aptitud psicosomática licencia de conducir (Solicitar RUC)',
  ]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleResultClick = (result) => {
    const match = result.match(/\d{5}/); // Busca un código de 5 dígitos
    if (match) {
      const code = match[0];
      console.log(`Redirigiendo a /registro-tasa/${code}`);
      window.location.href = `/registro-tasa/${code}`; // Redirige al path con el código
    } else {
      console.log(`El elemento "${result}" no tiene un código válido.`);
    }
  };

  const filteredResults = results.filter((result) =>
    result.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <main>
      <div className="main-title">
        <h1>¿QUÉ PAGAMOS HOY?</h1>
        <input
          type="text"
          className="search-bar"
          placeholder="Buscar..."
          value={searchText}
          onChange={handleSearchChange}
        />
        {searchText && (
          <div className="search-results">
            {filteredResults.map((result, index) => (
              <div
                key={index}
                className="search-result-item clickable"
                onClick={() => handleResultClick(result)}
              >
                {result}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="carousel-container"> 
        <Carousel>
          <Carousel.Item>
            <img
              className="carrusel1"
              src={carrusel1} 
              alt="First slide"
              height="483"
            />
            <Carousel.Caption>
              <h3>Hagámoslo fácil.</h3>
              <p>¡Aceptamos diferentes medios de pago!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carrusel2"
              src={carrusel2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Hagámoslo fácil.</h3>
              <p>Encuentra la tasa que necesitas.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carrusel3"
              src={carrusel3} 
              alt="Third slide"
              height="483"
            />
            <Carousel.Caption>
              <h3>Hagámoslo fácil.</h3>
              <p>Realiza tus operaciones las 24 horas del día.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carrusel4"
              src={carrusel4} 
              alt="Fourth slide"
              height="483"
            />
            <Carousel.Caption>
              <h3>Hagámoslo fácil.</h3>
              <p>¿Buscas obtener tu DNI electrónico?</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </main>
  );
};

export default Main;
