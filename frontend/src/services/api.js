const API_URL = 'http://127.0.0.1:8000/api/servicios/';

export const getServicios = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Error al consultar los servicios');
  }
  return await response.json();
};