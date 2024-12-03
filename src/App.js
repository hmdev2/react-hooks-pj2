import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    setReverse((prevReverse) => !prevReverse);
  };

  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

        <h1>Counter: {counter}</h1>

        <p>
          <button type="button" onClick={handleClick}>
            Reverse {reverseClass}
          </button>
        </p>

        <button type="button" onClick={handleIncrement}>
          Increment {counter}
        </button>
      </header>
    </div>
  );
}

export default App;
