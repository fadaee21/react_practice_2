import { useState, useEffect } from "react";
import { createConnection } from "./chat.js";

const serverUrl = "https://localhost:1234";

export default function ChatRoom() {
  const roomId = "music";
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => connection.disconnect();
  }, []);
  return <h1>Welcome to the {roomId} room!</h1>;
}
