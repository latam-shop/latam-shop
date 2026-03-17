import { ButtonProps } from "./button.types";

export const Buttom = ({
  title,
  onClick,
  className,
  variant,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      className={`${className} ${variant ? variant : ""}`}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
