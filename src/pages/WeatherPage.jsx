
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const WeatherPage = () => {
  const { city } = useParams();
  const [data, setData] = useState(null);
  const API_KEY = 'd441b757f1b03713008ab1081b89f0ef';

  useEffect(() => {
    if (!city) return;
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        if (!data || data.length === 0) {
          throw new Error("City not found");
        }

        const { lat, lon } = data[0];

       
        return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
      })
      .then(res => res.json())
      .then(weather => {
        setData(weather);
      })
      .catch(err => {
        console.error("Error fetching weather:", err);
      });
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
        src={`https://www.google.com/maps/embed/v1/place?key=dd1d3dd1dca26667a2fb72d078fe94b7&q=${city}`}
      ></iframe>
    </div>
  );
};

export default WeatherPage;
