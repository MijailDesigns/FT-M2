import React from 'react';
import c from '../estilos/Card.module.css'

export default function Card({name, min, max, img, onClose}) {
  // acá va tu código
  return(
    <div className={c.card}>
      
        <button onClick={onClose} className={c.btn}>X</button>
        <h4>{name}</h4>
      
      <div className={c.temperatura}>
        <div className={c.minmax}>
          <p>Min</p>
          <p>{min}</p>
        </div>

        <div className={c.minmax}>
          <p>Max</p>
          <p>{max}</p>
        </div>
        
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt=''></img>
      </div>
    </div>
  )
};