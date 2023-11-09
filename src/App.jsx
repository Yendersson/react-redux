import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrementAction, incrementAction } from './action/action';
import TableContent from './components/TableContent';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

const selector = state => state.contador;

function App() {

  const contadorState = useSelector(selector);
  const dispatch = useDispatch();

  function increment() {
    dispatch(incrementAction());
  }

  function decrement() {
    dispatch(decrementAction());
  }

  return (

    <div className="App">

     <h1>Table made it by Redux</h1>

      <BrowserRouter>
        <Routes>
        </Routes>
      </BrowserRouter>
      {/* 
        <h2>{contadorState.contador}</h2>
        <button onClick={increment}>Incrementar</button>
        <button onClick={decrement}>Decrementar</button>
      */}
    </div>
  );
}

export default App;
