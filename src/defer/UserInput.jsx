import React from "react";
import { useState, useDeferredValue } from "react";
import HeavyComponent from "../HeavyComponent";
export function UserInput() {
  const [value, setValue] = useState("");
  const deferredValue = useDeferredValue(value);
  return (
    <>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <p>Actual Value: {value}</p>
      <HeavyComponent val={value} />
      <HeavyComponent val={deferredValue} />
    </>
  );
}
