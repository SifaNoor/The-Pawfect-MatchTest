import React, { useState } from 'react';
import axios from 'axios';

function Search() {
  const [type, setType] = useState('');
  const [location, setLocation] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/pets/search', {
        params: { type, location }
      });
      setResults(res.data.animals);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Search for Pets</h2>
      <input
        type="text"
        placeholder="Type (e.g. dog, cat)"
        value={type}
        onChange={(e) => setType(e.target.value)}
        style={{ marginRight: '1rem' }}
      />
      <input
        type="text"
        placeholder="Location (e.g. NY)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleSearch} style={{ marginLeft: '1rem' }}>Search</button>

      <div>
        {results.map((pet) => (
          <div key={pet.id} style={{ border: '1px solid #ccc', marginTop: '1rem', padding: '1rem' }}>
            <h3>{pet.name}</h3>
            {pet.photos[0] && <img src={pet.photos[0].small} alt={pet.name} />}
            <p>{pet.breeds.primary}</p>
            <p>{pet.age}, {pet.gender}</p>
            <p>{pet.contact.address.city}, {pet.contact.address.state}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
