import { Control } from "react-hook-form";

export interface ICustomPhone {
  label?: string;
  name: string;
  control: Control<any>;
  errors?: any;
  placeholder?: string;
}