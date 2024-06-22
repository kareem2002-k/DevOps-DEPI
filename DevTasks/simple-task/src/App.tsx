import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import TimeWeather from './components/TimeWeather';
import QrCodeConverter from './components/QrCodeConverter';
import PasswordGenerator from './components/PasswordGenerator';
import TodoList from './components/TodoList';


function App() {
  return (
    <Router>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/time-weather" element={<TimeWeather />} />
          <Route path="/qr-code" element={<QrCodeConverter />} />
          <Route path="/password-generator" element={<PasswordGenerator />} />
          <Route path="/todo-list" element={<TodoList />} />
        </Routes>
  
    </Router>
  );
}

const Home = () => (
  <div className="bg-dark-bg min-h-screen flex flex-col items-center justify-center text-white">
    <h1 className="text-3xl font-bold mb-8">Choose Your App</h1>
    <div className="container mx-auto p-4">
      <nav className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        <Link to="/time-weather" className="bg-primary text-center text-white text-lg py-6 px-4 rounded-lg transition duration-300 hover:bg-primary-hover">
          Time/Weather
        </Link>
        <Link to="/qr-code" className="bg-primary text-center text-white text-lg py-6 px-4 rounded-lg transition duration-300 hover:bg-primary-hover">
          QR Code Converter
        </Link>
        <Link to="/password-generator" className="bg-primary text-center text-white text-lg py-6 px-4 rounded-lg transition duration-300 hover:bg-primary-hover">
          Password Generator
        </Link>
        <Link to="/todo-list" className="bg-primary text-center text-white text-lg py-6 px-4 rounded-lg transition duration-300 hover:bg-primary-hover">
          To-Do List
        </Link>

      </nav>
    </div>
  </div>
);

export default App;
