import React, { useRef } from "react";
import styles from "./AddTask.module.css";

export const AddTask = (): JSX.Element => {
  const taskInput = useRef(null);
  return (
    <form>
      <input type="text" placeholder="Add task" ref={taskInput} />
      <button type="submit">ADD</button>
    </form>
  );
};
