import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const reverter = reverse ? 'reverse' : '';

  const handleReverse = () => {
    setReverse(!reverse);
  };

  const handleCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverter}`} alt="logo" />

        <h1>Counter: {counter}</h1>

        <p>
          <button type="button" onClick={handleReverse}>
            Reverse {reverter}
          </button>
        </p>

        <button type="button" onClick={handleCounter}>
          Count
        </button>
      </header>
    </div>
  );
}

export default App;
