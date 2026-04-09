export type TextInputProps = {
  label?: string;
  type?: "text" | "email" | "password" | "number";
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  name?: string;
  id?: string;
};
