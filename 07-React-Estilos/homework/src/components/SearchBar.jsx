import React from 'react';
import s from '../estilos/SearchBar.module.css'

export default function SearchBar({onSearch}) {
  // acá va tu código
  return(
    <div className={s.div}>
      <input type={'text'} placeholder='Cuidad...'
      className={s.input}></input>
      <button onClick={() => onSearch('buscar ciudad')}
      className={s.btn}>Agregar</button>
    </div>
  )
};