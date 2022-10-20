import React, { Component } from 'react';
import store from '../store.js';
// import * as actionsCreators from '../actions';
// con el * me estoy importando todo lo que este exportado y con 'as' le asigno el nombre actionsCreators
import { 
  increment, 
  decrement, 
  reset, 
  fetchPost, 
} from '../actions/index.js'; // hay que colocar la ruta conmpleta ../actions/index.js de lo contratio el fetchPost no funcionara
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import { fetchPost } from '../actions/index.js';
import axios from 'axios';


const Counter = ({ counter, incremento, decremento, resetear, traerPost}) => (  // destructuring
      <p>
        Clicked: {counter} times
        {' '}
        <button onClick={incremento}>
          +
        </button>
        {' '}
        <button onClick={decremento}>
          -
        </button>
        {' '}
        <button onClick={resetear}>
          Reset
        </button>
        <button onClick={() => traerPost(counter)}>
          Fetch
        </button>
      </p>
    )

const mapStateToProps = (state) => ({  // aca de indican las propiedades de state que recibira este componente a traves del connect, puedo pasarle una o varias 
  counter: state.count,
});

//el parametro que recibe mapStateToProps puede tener cualquier nombre pero lo llamamos state porque cuando le pasemos esta funcion a connect como parametro, este le va a pasar el estado global, es decir el estado que esta en mi store, que es lo siguiente:

// const initialState = {
//   count: 0,
//   loading: false,
//   post: {},
// }

//entonces mapStateToProps quedaria asi en el connect
// mapStateToProps(initialState) => {counter: 0}
//y entonces counter quedaria como props de este componente

function mapDispatchToProps(dispatch) {

  //forma #1 de invocar el mapDispatchToProps

  // return bindActionCreators(actionsCreators, dispatch); 

  //bindActionCreators debo importarlo de redux, bindActionCreators recibe todas las acciones como primer parametro y el significado de dispatch y devuelve funciones con los mismos nombres de los actions creators

  //forma #2 de invocar el mapDispatchToProps
  return{
    incremento: () => dispatch(increment()),
    decremento: () => dispatch(decrement()),
    resetear: () => dispatch(reset()),
    traerPost: (value) => dispatch(fetchPost(value)),
  }
  
}

//hay varias maneras de plantear el mapDispatchToProps

//mapDispatchToProps lee los actiones creators, es decir las funciones que retornan acciones y las convierte en funciones que las despachan, entonces retorna un objeto con funciones despachadoras en sus propiedades, y estas propiedades con funciones despachadoras pasan a ser parte de las prop que recibe el componente por lo que las podemos usar

//increment() //dispatch({type: 'INCREMENT'})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

//forma #3
//en lugar de pasarle un mapDispatchToProps a connect le pasamos un objeto con los nombres de mis action creators
//export default connect(mapStateToProps, { increment, decrement, reset, fetchPost, })(Counter);

// si solo quiero modificar el state y no me interesa leerlo en este componente le paso el connect de la siguiente manera, colocando en null el primer parametro
//export default connect(null, mapDispatchToProps)(Counter); 

//por ultimo en la funcion connect si le pasa el nombre del componente
//esto se hace por cada componente que yo quiera conectar al store
//connect basicamente retorna una funcion con todas las propiedades la cual la invoco pasandole por parametro un componente, el cual le retorna con todas las nuevas propiedades y este componente con todas estas props es que exporto, es por ES POR ESO QUE SE EXPORTA EL CONNECT
