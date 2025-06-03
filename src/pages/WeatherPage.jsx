
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const WeatherPage = () => {
  const { city } = useParams();
  const [data, setData] = useState(null);
  const API_KEY = 'YOUR_OPENWEATHERMAP_API_KEY';

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, [city]);

  if (!data) return <p>Loading...</p>;
  if (data.cod !== 200) return <p>Error: {data.message}</p>;

  return (
    <div>
      <h2>Weather in {data.name}</h2>
      <p>🌡️ Temperature: {data.main.temp}°C</p>
      <p>💧 Humidity: {data.main.humidity}%</p>
      <p>☁️ Condition: {data.weather[0].description}</p>

      {/* Bonus: Google Map Embed */}
      <iframe
        title="map"
        width="100%"
        height="300"
        style={{ border: 0, marginTop: '1rem' }}
        loading="lazy"
        allowFullScreen
        src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${city}`}
      ></iframe>
    </div>
  );
};

export default WeatherPage;
