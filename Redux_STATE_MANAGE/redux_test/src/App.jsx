

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/actions'; // Import actions

const App = () => {
  // Access the current count from the Redux store
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch(); // Get the dispatch function

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default App;
