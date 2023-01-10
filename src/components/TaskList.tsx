import React from "react";
import styles from "./TaskList.module.css";
import { Tasks } from "./components/tasklist.model";

export const TaskList = (props: Tasks): JSX.Element => {
  return (
    <ul>
      {props.tasks.map((task) => (
        <li key={task.id}>{task.taskName}</li>
      ))}
    </ul>
  );
};
