import P from 'prop-types';
import { createContext, useReducer } from 'react';
import { GlobalState } from './data';
import { reducer } from '../../Reducers/reducer.js';
import { actions } from '../../Actions/actions.js';

export const Context = createContext();

export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, GlobalState);

  const changeTitle = (payload) => {
    dispatch({ type: actions.CHANGE_TITLE, payload });
  };

  return (
    <Context.Provider value={{ state, changeTitle }}>
      {children}
    </Context.Provider>
  );
};

AppContext.propTypes = {
  children: P.node,
};
