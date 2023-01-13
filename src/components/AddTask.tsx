import React, { useRef } from "react";
import { Button } from "./Button";

type AddTaskProps = {
  taskHandler: (taskName: string) => void;
};

export const AddTask = (props: AddTaskProps): JSX.Element => {
  const taskInput = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: string = taskInput.current!.value;
    if (newTask.length < 3) {
      alert("Task name must be of min 3 characters");
      return;
    }
    props.taskHandler(newTask);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="form-control"
        type="text"
        placeholder="Add task"
        ref={taskInput}
      />
      <Button type="submit" text="Add Task" />
    </form>
  );
};
