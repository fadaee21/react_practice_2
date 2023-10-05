export function tasksReducer(tasks, action) {
  console.log(action)
    switch (action.type) {
      case 'added': {
        return [
          ...tasks,
          {
            id: action.payload.id,
            text: action.payload.text,
            done: false,
          },
        ];
      }
      case 'changed': {
        return tasks.map((t) => {
          if (t.id === action.payload.task.id) {
            return action.payload.task;
          } else {
            return t;
          }
        });
      }
      case 'deleted': {
        return tasks.filter((t) => t.id !== action.payload.taskId);
      }
      default: {
        throw Error('Unknown action: ' + action.payload.type);
      }
    }
  }