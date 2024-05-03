let tasks = [
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: true },
    { id: 3, title: "Task 3", completed: false },
  ];
  
  export const getTasks = () => {
    return tasks;
  };
  
  export const addTask = (title) => {
    const newTask = {
      id: tasks.length + 1,
      title,
      completed: false,
    };
    tasks.push(newTask);
    return newTask;
  };
  
  export const updateTask = (id, newTitle) => {
    const taskIndex = tasks.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
      tasks[taskIndex].title = newTitle;
      return tasks[taskIndex];
    }
    return null;
  };
  
  export const deleteTask = (id) => {
    const initialLength = tasks.length;
    tasks = tasks.filter((task) => task.id !== id);
    return initialLength !== tasks.length;
  };
   