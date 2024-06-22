
import { useState, useEffect } from 'react';

const TimeWeather = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [weather, setWeather] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);

    // Example: Fetch weather data from a public API
    fetch('https://api.open-meteo.com/v1/forecast?latitude=35&longitude=139&hourly=temperature_2m')
      .then(response => response.json())
      .then(data => setWeather(`${data.hourly.temperature_2m[0]} °C`))
      .catch(error => console.error('Error fetching weather:', error));

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Current Time: {time}</h2>
      <p>Weather: {weather || 'Loading...'}</p>
    </div>
  );
};

export default TimeWeather;
