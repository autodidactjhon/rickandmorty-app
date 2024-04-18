import { useState } from 'react';
import './Navbar.css';

const speciesArray = [
  { value: 'Human', label: 'Human' },
  { value: 'Alien', label: 'Alien' },
  { value: 'Robot', label: 'Robot' },
  { value: 'Humanoid', label: 'Humanoid' },
  { value: 'Poopybutthole', label: 'Poopybutthole' },
  { value: 'Mythological Creature', label: 'Mythological Creature' },
  { value: 'Animal', label: 'Animal' },
  { value: 'Cronenberg', label: 'Cronenberg' },
  { value: 'Disease', label: 'Disease' },
  { value: 'unknown', label: 'Unknown' },
];

const statusArray = [
  { value: 'Alive', label: 'Alive' },
  { value: 'Dead', label: 'Dead' },
  { value: 'unknown', label: 'Unknown' },
];

const Navbar = ({ onSearch }) => {
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [status, setStatus] = useState('');

  const handleSearch = () => {
    onSearch({ name, species, status, isInitLoad: false });
  };

  const handleClear = () => {
    setName('');
    setSpecies('');
    setStatus('');
    onSearch({ name: '', species: '', status: '', isInitLoad: true });
  };

  return (
    <div className='navbar'>
      <div className='navbar-wrapper'>
        <div className='navbar-section'>
          <label htmlFor='name'>Search by Name:</label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='navbar-section'>
          <label htmlFor='species'>Search by Specie:</label>
          <select
            id='species'
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
          >
            <option value=''>All</option>
            {speciesArray.map(specie => (
              <option key={specie.value} value={specie.value} selected>{specie.label}</option>
            ))}
          </select>
        </div>
        <div className='navbar-section'>
          <label htmlFor='status'>Search by Status:</label>
          <select
            id='status'
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value=''>All</option>
            {statusArray.map(status => (
              <option key={status.value} value={status.value} selected>{status.label}</option>
            ))}
          </select>
        </div>
        <div className='btn-wrapper'>
          <button className='btn-search' onClick={handleSearch}>
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
          <button className='btn-clean' onClick={handleClear}>
            <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
