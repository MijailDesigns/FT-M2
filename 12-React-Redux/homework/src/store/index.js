// import { createStore, applyMiddleware, compose } from "redux";
//  import rootReducer from "../reducers/index";
// import thunk from "redux-thunk";

// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));

// export default store;

// compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))


// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// //import rootReducer from "../reducer/index";
// import { composeWithDevTools } from "redux-devtools-extension";

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

// export default store;

import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from "../reducers/index";
import thunk from 'redux-thunk';

const composeEnhancers =
   (typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
   compose;

const store = createStore(
   rootReducer,
   composeEnhancers(applyMiddleware(thunk)),
);

export default store;

