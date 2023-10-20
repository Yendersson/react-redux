import {createStore} from 'redux';
import contadorReducer from '../reducer/reducer.js';

const store = createStore(contadorReducer);

export default store;