import React from 'react';
import './App.css';
import { AppContext } from './contexts/AppContext';
import { H1 } from './components/H1';

function App() {
  return (
    <AppContext>
      <div className="App">
        <H1 />
      </div>
    </AppContext>
  );
}

export default App;
