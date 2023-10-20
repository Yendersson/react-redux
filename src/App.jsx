import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

const selector = state => state.contador;

function App() {

  const contadorState = useSelector(selector);
  const dispatch = useDispatch();

  function increment() {
    dispatch({type: 'contador/increment', payload: 1});
  }

  function decrement() {
    dispatch({type: 'contador/decrement', payload: 1});
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <h2>{contadorState}</h2>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
}

export default App;
