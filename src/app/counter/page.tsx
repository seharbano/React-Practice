"use client"
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };
  const handleRemove = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
   <div>
   <div className="flex flex-col items-center space-y-4">
      <p className="text-2xl font-semibold">Count: {count}</p>
      <div className="space-x-4">
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add
        </button>
        <button
          onClick={handleRemove}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Remove
        </button>
      </div>
    </div>
    </div>
  );
}

export default Counter;
