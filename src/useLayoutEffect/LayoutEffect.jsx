import { useLayoutEffect } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

export default function ExampleLayoutEffect() {
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);
  const ref = useRef(null);

  const t = performance.now();
  while (performance.now() - t < 500) {}

  useEffect(() => {
    const { height } = ref.current.getBoundingClientRect();
    setHeight(height);
  }, []);
  
  useLayoutEffect(() => {
    const { width } = ref.current.getBoundingClientRect();
    setWidth(width);
  }, []);

  return (
    <div>
      <div
        ref={ref}
        style={{ backgroundColor: "gray", height: "300px", width: "400px" }}
      >
        Box
      </div>
      <>
        {width && <p>This box is {width}px wide. --useLayoutEffect</p>}
        {height && <p>This box is {height}px tall. --useEffect</p>}
      </>
    </div>
  );
}
