import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchPage from './pages/SearchPage';
import WeatherPage from './pages/WeatherPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/weather/:city" element={<WeatherPage />} />
      </Routes>
    </Router>
  );
}

export default App;
