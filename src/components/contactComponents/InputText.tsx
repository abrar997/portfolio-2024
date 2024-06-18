import { HTMLInputTypeAttribute } from "react";
import {
  Path,
  FieldValues,
  UseFormRegister,
  FieldErrors,
} from "react-hook-form";

interface InputProps {
  label?: string;
  name: Path<FieldValues>;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  register: UseFormRegister<FieldValues>;
  classInput?: string;
  classLabel?: string;
  errors?: FieldErrors<FieldValues>;
  defaultValue?: any;
  settings?: boolean;
}

const InputText: React.FC<InputProps & any> = ({
  register,
  label,
  name,
  required,
  errors,
  settings,
  type = "text",
  classInput = "text-black font-extralight text-3xl w-full border border-black px-4 py-4",
  classLabel = "text-black font-extralight text-3xl inline-block pb-3 mb-2",
  placeholder,
  ...props
}) => (
  <>
    <label>
      {label}
      {required && <span className="text-secondary.main">*</span>}
    </label>
    <input
      {...register(name, { required, ...props })}
      type={type}
      className="bg-transparent placeholder:text-[12px] p-2 placeholder:text-gray-600 text-sm rounded border border-gray-600 focus-within:outline-none"
      placeholder={placeholder}
    />
    <span className="text-red-300 text-sm">{errors?.[name]?.message}</span>
  </>
);

export default InputText;
