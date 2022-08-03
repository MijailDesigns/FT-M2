import React from 'react';

export default function SearchBar({onSearch}) {
  // acá va tu código
  return(
    <div>
      <input type={'text'} placeholder='Cuidad...'></input>
      <button onClick={() => onSearch('buscarr ciudad')}>Agregar</button>
    </div>
  )
};