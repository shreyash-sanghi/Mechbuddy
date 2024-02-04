import React, { useState } from 'react';

const ItemCounter = (props) => {
  const [count, setCount] = useState(props.count);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex items-center">
      <button
        className="px-3 py-1 bg-[#F31D32] hover:bg-gray-300 rounded-full"
        onClick={decrement}
      >
        -
      </button>
      <span className="mx-2">{count}</span>
      <button
        className="px-3 py-1 bg-[#F31D32] hover:bg-gray-300 rounded-full"
        onClick={increment}
      >
        +
      </button>
    </div>
  );
};

export default ItemCounter;
