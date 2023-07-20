import React from 'react';
import { useDispatch } from 'react-redux';

import { increment, decrement } from '../actions';

function Controls(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <button type="button" onClick={() => dispatch(increment())}>+</button>
      <button type="button" onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default Controls;
