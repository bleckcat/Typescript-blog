import React from "react";

interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: string;
}

const Button: React.FC<Props> = ({ onClick, children }): JSX.Element => {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
