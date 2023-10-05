import React, { useState } from "react";

const AddTask = ({ onAddTask }) => {
  const [field, setField] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask(field);
    setField("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Task"
        value={field}
        onChange={(e) => setField(e.target.value)}
      />
      <button type="submit">submit</button>
    </form>
  );
};

export default AddTask;
