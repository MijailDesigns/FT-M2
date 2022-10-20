import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk' //npm install redux-thunk

const store = createStore(
  rootReducer, // los reducers
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), //para usar redux dev tools
  applyMiddleware(thunkMiddleware), //para que realice cosas asincronicas
);

export default store;
