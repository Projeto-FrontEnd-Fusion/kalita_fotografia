import { Control, FieldErrors } from "react-hook-form";
import { formLoginType } from '../schema/validation-form-login';

export interface IRHFProps {
  name: keyof formLoginType;
  control: Control<formLoginType>;
  errors?: FieldErrors;
}
