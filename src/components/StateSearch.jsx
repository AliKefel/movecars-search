import React, { useState, useEffect } from 'react';

const StateSearch = () => {
  const [locationsData, setLocationsData] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestedStates, setSuggestedStates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/locations.json`); 
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setLocationsData(data);
      } catch (error) {
        console.error('Failed to fetch:', error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value) {
      const suggestions = Object.keys(locationsData).filter(state =>
        state.toLowerCase().includes(value.toLowerCase())
      ).slice(0, 5); // Limit suggestions to top 5

      setSuggestedStates(suggestions);
    } else {
      setSuggestedStates([]);
    }
  };

  const handleSelect = (state) => {
    setSearchTerm(state); // Set input value to the selected state
    setSuggestedStates([]); // Clear suggestions after selection
  };

  return (
    <div className='flex justify-center relative '>
      <input 
        type="text" 
        placeholder="Search for a state" 
        value={searchTerm} 
        onChange={handleChange} 
        className='bg-black rounded-md shadow-md p-2 text-white hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-blue-700 transition-all duration-300' 
      />

      {suggestedStates.length > 0 && (
        <ul className="absolute bg-black opacity-80 hover:bg-slate-800  text-white mt-14 rounded-md shadow-md z-10 w-60">{/* Adjusted width */}
        {suggestedStates.map((state, index) => (
            <li 
              key={index} 
              className="p-2 hover:bg-black hover:z-0 cursor-pointer "
              onClick={() => handleSelect(state)} // Fill input with selected state on click
            >
              {state}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StateSearch;
