import React, { useState } from 'react';

const Main = () => {
  const [searchText, setSearchText] = useState('');
  const [results] = useState([
    'RENIEC',
    'PODER JUDICIAL',
    'MIGRACIONES',
    'POLICÍA NACIONAL DEL PERÚ',
    'SIS',
    'MINISTERIO DE TRANSPORTES Y COMUNICACIONES',
    'GOBIERNO REGIONAL DEL CALLAO',
    'OSCE',
    'INPE',
    'ESSALUD',
    'JNE',
    'MINISTERIO PÚBLICO',
    'SUNARP',
    'MINISTERIO DE RELACIONES EXTERIORES',
    'SUCAMEC',
    'UNIVERSIDAD NACIONAL DE PIURA',
    'INDECOPI',
    'UNIVERSIDAD NACIONAL HERMILIO VALDIZAN',
    'UNIVERSIDAD NACIONAL MAYOR DE SAN MARCOS',
    'ACADEMIA DE LA MAGISTRATURA',
    'DIR. REG. TRANSPORTES Y COMUNICACIONES CAJAMARCA',
    'UNIVERSIDAD NACIONAL FAUSTINO SÁNCHEZ CARRIÓN',
    'MINISTERIO DE JUSTICIA',
    'PRONABEC',
    'SUNEDU',
    'UNIVERSIDAD NACIONAL DE EDUCACIÓN ENRIQUE GUZMÁN Y VALLE',
    'AUTORIDAD DE TRANSPORTE URBANO',
    'MINISTERIO DE TRABAJO',
    'UNIVERSIDAD NACIONAL DEL SANTA - UNS CHIMBOTE',
    'UNIVERSIDAD NACIONAL PEDRO RUIZ GALLO',
    'UNIVERSIDAD NACIONAL JORGE BASADRE GROHMAN',
    'DIR. REG. TRANSPORTES Y COMUNICACIONES PIURA',
    'UNIVERSIDAD NACIONAL DEL ALTIPLANO PUNO',
    'UNIVERSIDAD NACIONAL TECNOLÓGICA DE LIMA SUR',
    'IPEN',
    'SUTRAN',
    'PROVIAS NACIONAL',
    'UNIVERSIDAD NACIONAL DEL CENTRO DEL PERÚ',
    'MARINA DE GUERRA DEL PERÚ',
    'SBN',
    'UNIVERSIDAD NACIONAL DANIEL ALCIDES CARRIÓN',
    'UNIVERSIDAD NACIONAL DE LA AMAZONÍA PERUANA',
    'FUERO MILITAR POLICIAL',
    'DIR. REG. TRANSPORTES Y COMUNICACIONES JUNÍN',
    'DIR. REG. TRANSPORTES Y COMUNICACIONES TACNA',
    'MINISTERIO DE SALUD - MINSA',
    'DIR. REG. TRANSPORTES Y COMUNICACIONES HUÁNUCO',
    'EDITORA PERÚ',
    'MINCETUR',
    'MINISTERIO DE LA PRODUCCIÓN',
    'MINISTERIO DE VIVIENDA, CONSTRUCCIÓN Y SANEAMIENTO',
    'ONPE',
    'SENACE',
    'SERNANP',
    'UNIVERSIDAD NACIONAL AMAZÓNICA DE MADRE DE DIOS',
    'UNIVERSIDAD NACIONAL DE HUANCAVELICA',
    'UNIVERSIDAD NACIONAL DE SAN MARTÍN',
    'UNIVERSIDAD NACIONAL MICAELA BASTIDAS DE APURIMAC',
    'UNIVERSIDAD NACIONAL T. RODRÍGUEZ DE MENDOZA DE AMAZONAS',
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
  ]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleResultClick = (result) => {
    alert(`You clicked on ${result}`);
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
                className="search-result-item"
                onClick={() => handleResultClick(result)}
              >
                {result}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Main;
