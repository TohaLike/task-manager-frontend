import { UseFormRegisterReturn as RegisterReturn } from "react-hook-form";

export interface InputProps {
  name: string;
  label: string;
  type?: "email" | "password" | "text";
  size?: "small" | "medium";
}

export interface SelectGenderProps {
  register: RegisterReturn;
}
