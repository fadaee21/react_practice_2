import React from "react";
import useOnlineStatus from "./hooks/useOnlineStatus";

const CustomHookSection = () => {
  const data = useOnlineStatus();
  console.log(data);
  return (
    <div>
      internet Status: {data ? "you are connected" : " you are Disconnected"}
    </div>
  );
};

export default CustomHookSection;
