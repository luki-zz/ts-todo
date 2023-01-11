import React, { useRef } from "react";
import styles from "./AddTask.module.css";

type AddTaskProps = {
  taskHandler: (taskName: string) => void;
};

export const AddTask = (props: AddTaskProps): JSX.Element => {
  const taskInput = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: string = taskInput.current!.value;
    props.taskHandler(newTask);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Add task" ref={taskInput} />
      <button type="submit">ADD</button>
    </form>
  );
};
