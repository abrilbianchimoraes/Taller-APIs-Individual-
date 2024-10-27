const apiKey = 'TU_API_KEY_AQUI'; // Reemplaza con tu clave de API
const city = 'Buenos Aires'; // Ciudad a consultar
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la conexión');
    }
    return response.json();
  })
  .then(data => {
    console.log(`La temperatura en ${city} es ${data.main.temp} °C`);
  })
  .catch(error => {
    console.error('Hubo un problema con la petición Fetch:', error);
  });
