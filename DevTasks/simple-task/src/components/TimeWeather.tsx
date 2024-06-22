import { useState, useEffect } from 'react';
import { FaClock, FaCloudSun } from 'react-icons/fa';

const TimeWeather = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [weather, setWeather] = useState<string | null>(null);
  const [location, setLocation] = useState<{ city: string; temperature: string; lat?: number; lon?: number }>({
    city: 'Fetching location...',
    temperature: 'Loading...',
  });

  useEffect(() => {
    // Update time every second
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      setDate(new Date().toLocaleDateString());
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchWeather = async (lat: number, lon: number) => {
      try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
        const data = await response.json();
        const temperature = data.current_weather.temperature;
        setWeather(`${temperature} °C`);
        setLocation({ city: 'Cairo', temperature: `${temperature} °C`, lat, lon });
      } catch (error) {
        console.error('Error fetching weather:', error);
        setWeather('Error fetching weather data');
      }
    };

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchWeather(latitude, longitude);
          },
          (error) => {
            console.error('Error fetching location:', error);
            setLocation({ city: 'Could not fetch location', temperature: 'N/A' });
          }
        );
      } else {
        console.error('Geolocation not supported by this browser.');
        setLocation({ city: 'Geolocation not supported', temperature: 'N/A' });
      }
    };

    getLocation();
  }, []);

  return (
    <div className="bg-dark-bg min-h-screen flex flex-col items-center justify-center text-white p-4">
      <div className="p-4 max-w-lg w-full text-center">
        <h2 className="text-3xl font-bold mb-6 flex items-center justify-center">
          <FaClock className="mr-2" /> Current Time: {time}
        </h2>
        <p className="text-xl mb-4">{date}</p>
        <div className="flex flex-col items-center justify-center bg-gray-800 p-6 rounded-md shadow-md">
          <FaCloudSun className="text-4xl mb-4" />
          <div>
            <h3 className="text-2xl font-bold">Weather at your location</h3>
            <p className="text-xl mb-2">{location.city}</p>
            <p className="text-xl">{weather}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeWeather;
