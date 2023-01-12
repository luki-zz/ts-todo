import React, { useState } from "react";

import "./App.css";
import { AddTask } from "./components/AddTask";
import { TaskModel } from "./components/task.model";
import { TaskList } from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState<TaskModel[]>([
    { id: 1, taskName: "Odebrać dziecie ze szkoły" },
  ]);

  const handleAddTask = (taskName: string) => {
    setTasks((prevTasks) => [...prevTasks, { id: Date.now(), taskName }]);
  };

  const handleRemoveTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((tasks) => tasks.id != id));
  };
  return (
    <>
      <AddTask taskHandler={handleAddTask} />
      <TaskList tasks={tasks} onRemoveTask={handleRemoveTask} />
    </>
  );
}

export default App;
