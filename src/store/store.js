import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import contadorReducer from '../reducer/reducer.js';
import reducerApi from '../reducer/reducerApi.js';
import reducerLogs from '../reducer/reducerLogs.js';

const rootReducer = combineReducers({
    contador: contadorReducer,
    api: reducerApi,
    auditLog: reducerLogs,
})

const store = createStore(rootReducer, applyMiddleware(thunk));



export default store;