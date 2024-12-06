import { createContext, useState } from 'react';
import { GlobalState } from './data';

export const GlobalContext = createContext();

// eslint-disable-next-line
export const AppContext = ({ children }) => {
  const [contextState, setState] = useState(GlobalState);

  return (
    <GlobalContext.Provider value={{ contextState, setState }}>
      {children}
    </GlobalContext.Provider>
  );
};
