import React from "react";
import { Button } from "./Button";
import { TaskModel } from "./task.model";
import styles from "./taskList.module.css";

export type TasksProps = {
  tasks: TaskModel[];
  onRemoveTask: (id: number) => void;
};

export const TaskList = (props: TasksProps): JSX.Element => {
  return (
    <ul className={styles.taskList}>
      {props.tasks.map((task: TaskModel) => (
        <li className={styles.taskListItem} key={task.id}>
          {task.taskName}
          <Button
            onRemoveTask={props.onRemoveTask}
            taskId={task.id}
            text="Remove"
          />
        </li>
      ))}
    </ul>
  );
};
