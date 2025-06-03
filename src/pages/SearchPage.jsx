
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchPage = () => {
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (city.trim()) {
      navigate(`/weather/${city}`);
    }
  };

  return (
    <div>
      <h2>Search Weather by City</h2>
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchPage;
