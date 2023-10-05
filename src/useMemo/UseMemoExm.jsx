import React, { useMemo, useState } from "react";
import HeavyComponent from "../HeavyComponent";
import heavyCalculation from "../heavyCalculation";

const UseMemoExm = () => {
  const [val, setVal] = useState("");
  //   const result = heavyCalculation();
  //^   it should handle by useMemo(calculation function)
  const result = useMemo(() => heavyCalculation(), []);

  return (
    <div>
      <h1>UseMemoExm</h1>
      <input value={val} onChange={(e) => setVal(e.target.value)} />
      <h1>heavyCalculation:{result}</h1>
      <HeavyComponent /> {/*//^ it should handle by memo(just a component)*/}
    </div>
  );
};

export default UseMemoExm;
