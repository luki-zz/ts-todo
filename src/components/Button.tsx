import React from "react";

export type ButtonProps = {
  onRemoveTask?: (id: number) => void;
  taskId?: number;
  text: string;
  type?: string;
};

export const Button = (props: ButtonProps): JSX.Element => {
  if (props.type) {
    return <button type="submit">{props.text}</button>;
  } else {
    return (
      <button onClick={() => props.onRemoveTask(props.taskId)}>
        {props.text}
      </button>
    );
  }
};
