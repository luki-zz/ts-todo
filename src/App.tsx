import React, { useState } from "react";

import "./App.css";
import { AddTask } from "./components/AddTask";
import { TaskList } from "./components/TaskList";
import { Tasks } from "./components/tasklist.model";

function App() {
  const [tasks, setTasks] = useState<Tasks[]>([
    { id: 1, taskName: "Odebrać dziecie ze szkoły" },
  ]);
  return (
    <>
      <AddTask />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
