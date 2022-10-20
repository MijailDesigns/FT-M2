import axios from 'axios';

export function increment() {
  return {
    type: 'INCREMENT',
  }
};
export function decrement() {
    return {
      type: 'DECREMENT',
  };
};
export function reset() {
  return {
    type: 'RESET',
  }
}

export function getPost() {
  return {
    type: 'GET_POST',
  }
}

export function receivePost(post) {
  return {
    type: 'RECEIVE_POST',
    post
  }
}

export function fetchPost(valor) { //el valor es el valor del id que vamos lo vamos a tomar del valor del counter
  return function (dispatch) {
    dispatch(getPost());  //1
    axios.get(`https://jsonplaceholder.typicode.com/todos/${valor}`) //2
      // .then(r => console.log(r))   
      .then(r => r.data)   //3
      .then(d => dispatch(receivePost(d))) // 4
      .catch(e => console.log(e)); // 5
  }
}

//fetchPost(valor) en lugar de retornar un objeto como todos los otros actions retorna una funcion, es decir hacer una closure, en el PUNTO 1 cambia el loading a true por lo que se mostrara dentro del div 'loading...' luego en el PUNTO 2 hace la request a la API con axios, en el PUNTO 3 una vez recibe la info pasa al PUNTO 4 donde ejecuta el dispatch(receivePost(d)) pasandole por parametro la data que vino del request, lo que cambia el loading a false y modifica el post del state con la info del request, en el PUNTO 5 muestra un error en consola si no trae nada de la API


//para el caso puntual de axios cuando hago un get este me trae un objeto grande como muchas propiedades entre las cuales esta .data dentro de .data esta la informacion que yo le solicite el por esto que hago el PUNTO 3 para quedarme solo con lo que esta en el .data del objeto que recibimos y luego este . data es el que le pasamos en el .then del PUNTO 4


//gif del flujo de react-redux con operaciones asincronas https://d33wubrfki0l68.cloudfront.net/08d01ed85246d3ece01963408572f3f6dfb49d41/4bc12/assets/images/reduxasyncdataflowdiagram-d97ff38a0f4da0f327163170ccc13e80.gif