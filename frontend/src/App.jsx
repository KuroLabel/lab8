import { useEffect, useState } from 'react';
import { getServicios } from './services/api';

function App() {
  const [servicios, setServicios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getServicios()
      .then((data) => {
        setServicios(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ padding: '20px' }}>Cargando servicios desde Django...</p>;

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Catálogo de Servicios</h1>
      {servicios.length === 0 ? (
        <p>No hay servicios registrados en la base de datos.</p>
      ) : (
        <ul>
          {servicios.map((servicio) => (
            <li key={servicio.id} style={{ marginBottom: '15px' }}>
              <strong>{servicio.nombre}</strong> - ${servicio.precio}
              <p>{servicio.descripcion}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;