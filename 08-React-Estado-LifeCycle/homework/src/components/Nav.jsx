import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div className="Nav">
      <div className='navdiv'>
        <img src={Logo} alt="" id='logoHenry'/>
        <h4>Henry - Weather App</h4>
      </div>
      
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Nav;
