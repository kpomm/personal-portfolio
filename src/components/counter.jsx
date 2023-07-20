import React from 'react';
import { useSelector } from 'react-redux';

function Counter(props) {
  const count = useSelector((store) => store.count);
  return (
    <div>
      Current Count: {count}
    </div>
  );
}

export default Counter;
