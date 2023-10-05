import { useReducer } from "react";
import AddTask from "./AddTask.js";
import TaskList from "./TaskList.js";
import { tasksReducer } from "./taskReducer.js";

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];

export default function TaskAppReducer() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(text) {
    dispatch({ type: "added", payload: { id: nextId++, text } });
  }
  function handleChangeTask(task) {
    dispatch({ type: "changed", payload: { task } });
  }
  function handleDeleteTask(taskId) {
    dispatch({ type: "deleted", payload: { taskId } });
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}
