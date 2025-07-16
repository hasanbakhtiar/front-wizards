import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(1);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div className="mt-5 ms-5 ">
      <p>
        <b>Counter</b>
      </p>
      <button
        className={`btn btn-danger ${count <= 1 ? 'disabled' : ''}`}
        onClick={() => {
          if (count <= 1) {
            alert('test');
          } else {
            setCount(count - 1);
          }
        }}
      >
        -
      </button>
      <span className="mx-3">{count}</span>
      <button className="btn btn-success" onClick={increment}>
        +
      </button>
    </div>
  );
};

export default Counter;
