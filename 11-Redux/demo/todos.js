const redux = require('redux');

const createStore = redux.createStore;

const ADD_TODO = 'ADD_TODO'  // esto es para evitar errores de tipeo 
const REMOVE_TODO = 'REMOVE_TODO';


const initialState = {  //creo un estado iniciar puede tener cualquier nombre pero es para saber a que hacer referencia
  todos: []
}

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload] // hay que hacer la copia con ...state para que no se pierdan los demas valores
      }
    case REMOVE_TODO:
      return {
        todos: state.todos.filter((text, i) => i !== action.payload)
      }
    default:
      return state;
  }
}

const store = createStore(rootReducer);  //creo un store y le paso el reducer por parametro, 
//store = {dispatch, subscribe, getState.....}

store.subscribe(() => {  // esto se ejecuta al modificarse el state
  console.log('Subscription: ', store.getState()); 
});

function addTodo(text) {
  return {
    type: ADD_TODO,
    payload: text
  }
}

function removeTodo(index) {
  return {
    type: REMOVE_TODO,
    payload: index
  }
}

store.dispatch(addTodo('Comprar pan')) //addTodo('Comprar pan') --> {type: ADD_TODO, payload: 'Comprar pan'}
store.dispatch(addTodo('Correr'))

store.dispatch(removeTodo(1))

console.log(store.getState());
console.log(store.getState().todos); //para acceder a solo una propiedad del estado