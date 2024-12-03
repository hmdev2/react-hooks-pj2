import './App.css';
import React, { useCallback, useEffect, useState } from 'react';
import P from 'prop-types';

const Button = React.memo(function Button({ incrementButton }) {
  return (
    <button type="button" onClick={() => incrementButton(10)}>
      +
    </button>
  );
});

Button.propTypes = {
  incrementButton: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((prevCounter) => prevCounter + num);
  }, []);

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
}

export default App;
