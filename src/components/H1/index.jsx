import { useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';

export const H1 = () => {
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
