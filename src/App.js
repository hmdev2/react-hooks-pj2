import React from 'react';
import './App.css';
import { AppContext, GlobalContext } from './contexts/AppContext';
import { Div } from './components/Div';

function App() {
  return (
    <AppContext>
      <Div />
    </AppContext>
  );
}

export default App;
