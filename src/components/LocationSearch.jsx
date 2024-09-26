// const countryOptions = [
//   { value: 'USA', label: 'United States' },
//   { value: 'CAN', label: 'Canada' },
//   { value: 'MEX', label: 'Mexico' },
// ];

// const usCityOptions = [
//   { value: 'NYC', label: 'New York City' },
//   { value: 'LAX', label: 'Los Angeles' },
//   { value: 'CHI', label: 'Chicago' },
// ];
// import Select from 'react-select';
// import Geonames from 'geonames.js';
// import{locationsData} from '../locations.json'

// const geonames = Geonames({
//     username: 'your_username',  // Replace with your Geonames username
//     lan: 'en',
//     encoding: 'JSON'
// });

// const countryOptions = [
//     { value: 'USA', label: 'United States', geonameId: 6252001 },
//     { value: 'MEX', label: 'Mexico', geonameId: 3996063 },
//     { value: 'CAN', label: 'Canada', geonameId: 6251999 }
// ];
import React, { useState, useEffect } from 'react';

const LocationSearch = () => {
  const [locationsData, setLocationsData] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestedCities, setSuggestedCities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/locations.json'); // Ensure 'locations.json' is correct
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setLocationsData(data);
      } catch (error) {
        console.error('Failed to fetch:', error);
      }
    };

    fetchData();
  }, []);

  const handleSelect = (city) => {
    setSearchTerm(city); // Set input value to the selected state
    setSuggestedCities([]); // Clear suggestions after selection
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value) {
      const suggestions = Object.entries(locationsData)
        .flatMap(([state, cities]) => 
          cities.filter(city => city.toLowerCase().includes(value.toLowerCase()))
        )
        .slice(0, 5); // Limit suggestions to top 5

      setSuggestedCities(suggestions);
    } else {
      setSuggestedCities([]);
    }
  };

  return (
    <div className='flex justify-center relative '>
      <input 
        type="text" 
        placeholder="Search for a city" 
        value={searchTerm} 
        onChange={handleChange} 
        className='bg-black rounded-md shadow-md p-2 text-white hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-blue-700 transition-all duration-300' 
      />

    {suggestedCities.length > 0 && (
        <ul className="absolute bg-black opacity-80 hover:bg-slate-800  text-white mt-14 rounded-md shadow-md z-10 w-60">
            {suggestedCities.map((city, index) => (
                
                <li
                 key={index} 
                 className="p-2 hover:bg-black cursor-pointer hover:rounded-md"
                 onClick={() => handleSelect(city)} // Fill input with selected state on click
                >
                    {city}
                </li>
            ))}
        </ul>
    )}
    </div>
  );
};

export default LocationSearch;