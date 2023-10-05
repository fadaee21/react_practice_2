import React, { useState } from "react";

const TaskList = ({ tasks, onChangeTask, onDeleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task
            task={task}
            onChangeTask={onChangeTask}
            onDeleteTask={onDeleteTask}
          />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;

const Task = ({ task, onChangeTask, onDeleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);

  let todoContent;

  if (isEditing) {
    todoContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            onChangeTask({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    todoContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          onChangeTask({
            ...task,
            done: e.target.checked,
          });
        }}
      />
      {todoContent}
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </label>
  );
};
