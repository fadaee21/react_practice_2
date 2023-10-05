import React, { useState, forwardRef, useImperativeHandle } from "react";

const ImperativeHook = () => {
  const childRef = React.useRef();

  return (
    <>
      <button onClick={() => childRef.current.increment()}>increment from parents</button>
      <button onClick={() => childRef.current.decrement()}>decrement from parents</button>
      <ChildComponent ref={childRef} />
    </>
  );
};

export default ImperativeHook;

const ChildComponent = forwardRef((props, ref) => {
  const [value, setValue] = useState(0);

  useImperativeHandle(ref, () => ({
    increment: () => setValue(value + 1),
    decrement: () => setValue(value - 1),
  }));

  return <div>ChildComponent: {value}</div>;
});
