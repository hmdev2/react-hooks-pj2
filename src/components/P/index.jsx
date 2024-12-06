import { useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';

export const P = () => {
  const theState = useContext(GlobalContext);
  const {
    contextState: { body, counter },
    setState,
  } = theState;
  return (
    <p
      style={{ cursor: 'pointer', userSelect: 'none' }}
      onClick={() =>
        setState((prevState) => ({
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
