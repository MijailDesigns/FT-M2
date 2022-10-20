import React, { useReducer } from "react"; //para usar useReducer hay que importarlo
import reducer, { initialState } from '../reducer'


// const initialState = {count: 0};

// function reducer(state, action) {
//     switch (action.type) {
        // case 'increment':
        //     return {count: state.count + 1};
        // case 'decrement':
        //     return {count: state.count - 1};
//         default:
//             throw new Error();
//     }
// }

// **** useReducer se puede decir que similar al connect ya que atraves de este conectamos el componente a los reducer que modifican el state de redux

 export default function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);
    //cuando se declara o invoca el useReducer se le pasan dos parametros que son los reducers y el estado global, como se ve arriba, de esta retorna dos cosas por el destructuring como se ve a la izquierda, la primera es el estado y la segunda es la funcion que modifica el estado que en este caso ya que se trata del estaod global se usa el dispatch ya que esta despacha acciones que a su vez modifican el estado global
    return (
    <>
        <h1>Count: {state.count}</h1>
        <h1>Name: {state.name}</h1>
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
    );
}