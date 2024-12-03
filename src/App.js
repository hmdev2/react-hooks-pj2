import './App.css';
import { useEffect, useState } from 'react';

const eventFn = () => {
  console.log('h1 clickado');
};

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('componentDidUpdate');
  });

  useEffect(() => {
    console.log('componentDidMount');
  }, []);

  useEffect(() => {
    console.log('contador mudou para: ' + counter);
  }, [counter]);

  useEffect(() => {
    //componentWillUmount
    document.querySelector('h1').addEventListener('click', eventFn);

    return () => {
      document.querySelector('h1').removeEventListener('click', eventFn);
    };
  }, []);

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <button type="button" onClick={() => setCounter(counter + 1)}>
        +
      </button>
    </div>
  );
}

export default App;
