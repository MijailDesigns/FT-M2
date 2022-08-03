import React, { useState } from "react";
import s from './SearchBar.module.css'

export default function SearchBar({onSearch}) {

  const [ciudad, setCiudad] = useState('');

  const manejarCambio = e => {
    setCiudad(e.target.value);
  }


  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(ciudad);
      setCiudad('');
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        className={s.input}
        onChange={manejarCambio}
        value={ciudad}
      />
      <input type="submit" value="Agregar" className={s.btn}/>
    </form>
  );
}
