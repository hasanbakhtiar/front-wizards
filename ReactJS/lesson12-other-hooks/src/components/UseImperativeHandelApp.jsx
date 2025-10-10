import { forwardRef, useImperativeHandle, useRef } from "react";

const MyInput = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    myFunc: sayHi,
  }));

  const sayHi = () => {
    alert("Hello World!");
  };
  return <input type="text" />;
});

const UseImperativeHandelApp = () => {
  const inputRef = useRef();
  const handleClick = () => {
    inputRef.current.myFunc();
  };
  return (
    <div>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>Start</button>
    </div>
  );
};

export default UseImperativeHandelApp;
