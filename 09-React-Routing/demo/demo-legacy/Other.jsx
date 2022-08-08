import React from 'react';

export default function Other({ match, location, history }) {
  console.log(match, location, history);
const clickHandle = () => history.goBack();

  return (
    <div>
      <h2>Parameter: {match.params.paramOne}</h2>
      <button onClick={clickHandle}>volver</button>
    </div>
  );
};
  