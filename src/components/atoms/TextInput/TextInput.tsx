import React from "react";
import { TextInputProps } from "./TextInput.types";
import classes from "./textinput.module.css";

export const TextInput: React.FC<TextInputProps> = ({
  label,
  type = "text",
  placeholder,
  disabled = false,
  value,
  onChange,
  className = "",
  name,
  id,
}) => {
  return (
    <div className={classes.container}>
      {label && (
        <label htmlFor={id} className={classes.label}>
          {label}
        </label>
      )}

      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={onChange}
        className={`${classes.input} ${className}`}
      />
    </div>
  );
};
