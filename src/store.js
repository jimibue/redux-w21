import { createStore, compose, } from 'redux';

import rootReducer from './reducers/index';

// setup dev tools
const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
)

// create the store
const store = createStore(rootReducer, { }, enhancers);

// setup auto reloading(hot reloading...relaod on save)
if(module.hot) {
  module.hot.accept('./reducers/',() => {
   const nextRootReducer = require('./reducers/index').default;
   store.replaceReducer(nextRootReducer);
  });
}


export default store;