import React from "react";
import { TaskModel } from "./task.model";

export type TasksProps = {
  tasks: TaskModel[];
  onRemoveTask: (id: number) => void;
};

export const TaskList = (props: TasksProps): JSX.Element => {
  return (
    <ul>
      {props.tasks.map((task: TaskModel) => (
        <li key={task.id}>
          {task.taskName}
          <button onClick={() => props.onRemoveTask(task.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};
