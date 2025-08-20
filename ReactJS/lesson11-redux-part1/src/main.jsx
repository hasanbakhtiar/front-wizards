import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createStore } from 'redux';

const reducerData = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      if (action.payload === 0) {
        return (state = 404);
      } else {
        return state + action.payload;
      }
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return (state = 0);
    default:
      return state;
  }
};

const incrementAction = (count) => ({
  type: 'INCREMENT',
  payload: count,
});

const store = createStore(reducerData);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementAction(10));
store.dispatch(incrementAction(15));
store.dispatch(incrementAction(0));


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Hello Redux</h1>
  </StrictMode>
);
