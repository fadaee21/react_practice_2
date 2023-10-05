import React, { memo } from "react";
const HeavyComponent = ({ val }) => {
  let startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // Do nothing for 0.5s per item to emulate extremely slow code
  }
  return <h2>HeavyComponent:{val} </h2>;
};

export default memo(HeavyComponent);
