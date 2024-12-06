import React from 'react';
import './App.css';
import { createContext } from 'react';
import { useState } from 'react';
import { useContext } from 'react';

const GlobalState = {
  title: 'O título que contexto',
  body: 'O body do contexto',
  counter: 0,
};

const GlobalContext = createContext();

// eslint-disable-next-line
const Div = ({ children }) => {
  return (
    <div className="App">
      <H1 />
      <P />
    </div>
  );
};

const H1 = () => {
  const theState = useContext(GlobalContext);
  const {
    contextState: { title, counter },
  } = theState;
  return (
    <h1>
      {title} {counter}
    </h1>
  );
};

const P = () => {
  const theState = useContext(GlobalContext);
  const {
    contextState: { body, counter },
    setContextState,
  } = theState;
  return (
    <p
      style={{ cursor: 'pointer', userSelect: 'none' }}
      onClick={() =>
        setContextState((prevState) => ({
          ...prevState,
          counter: prevState.counter + 1,
        }))
      }
    >
      {body}
      {counter}
    </p>
  );
};

function App() {
  const [contextState, setContextState] = useState(GlobalState);

  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      <Div />
    </GlobalContext.Provider>
  );
}

export default App;
