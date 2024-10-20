

import { createStore } from 'redux';
import counterReducer from './reducer';

// Create the store with the reducer
const store = createStore(counterReducer);

export default store;
