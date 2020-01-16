import React from "react";

interface Props {
  value: string;
}

export const Button: React.FC<Props> = props => {
  const doneButton = () => {};

  const removeButton = () => {};

  return (
    <div>
      <button
        value={props.value}
        onClick={(e: any) => {
          let buttonValue: string = e.target.value;
          if (buttonValue === "Done") doneButton();
          if (buttonValue === "Remove") removeButton();
        }}
      ></button>
    </div>
  );
};
