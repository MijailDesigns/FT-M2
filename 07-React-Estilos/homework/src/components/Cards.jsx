import React from 'react';
import Card from './Card';
import s from '../estilos/Cards.module.css'

export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  if (!cities) {
    return <h2>No hay ciudades para mostrat</h2>
  }
  return( 
    <div className={s.divCards}>
      {cities && cities.map(city => 
        <Card 
          max={city.main.temp_max}
          min={city.main.temp_min}
          name={city.name}
          img={city.weather[0].icon}
          onClose={() => alert(city.name)}
          key={city.id}
        />
      )}
    </div>
  )
};