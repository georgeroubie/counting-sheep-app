import { useReducer } from 'react';
import { appReducer } from './reducer';

function useAppState() {
  const [state, dispatch] = useReducer(appReducer, {});

  function setState(type, value) {
    dispatch({ type, value });
  }

  return {
    state,
    setState,
  };
}

export { useAppState };
