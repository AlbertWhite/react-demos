import React from 'react';
import reducer from './reducer';

const initialcContext = {};
const UIStateContext = React.createContext(initialcContext);
const UIDispatchContext = React.createContext();

export const UIProvider = () => {
  const initialState = {};
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <UIProviderProxy state={state} dispatch={dispatch}>
      {children}
    </UIProviderProxy>
  );
};

export const useUIState = () => {
  return React.useContext(UIStateContext);
};

export const useUIDispatch = () => {
  const dispatch = React.useContext(UIDispatchContext);

  const updateState = React.useCallback((payload) => {
    dispatch(
      {
        // type:
        // payload:
      },
      [dispatch]
    );
  });

  return React.useMemo(
    () => ({
      updateState,
    }),
    [dispatch]
  );
};
