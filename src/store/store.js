import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import contadorReducer from '../reducer/reducer.js';
import reducerApi from '../reducer/reducerApi.js';

const rootReducer = combineReducers({
    contador: contadorReducer,
    api: reducerApi
})

const store = createStore(rootReducer, applyMiddleware(thunk));



export default store;