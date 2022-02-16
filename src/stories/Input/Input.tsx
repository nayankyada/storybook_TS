import React, { SetStateAction } from "react";
interface InputProps {
  type: string;
  placeholder: string;
  error?: boolean;
  errorMsg?:string;
  value?:string;
  onChange?:React.Dispatch<SetStateAction<string>>
}
const Input: React.FC<InputProps> = (props) => {
  return (
    <div className="relative">
      <input
        value={props.value}
        onChange={e => {props.onChange(e.target.value)}}
        // onChange={e => {props.onChange(e.target.value)}}
        type={props.type}
        placeholder={props.placeholder}
        className={` px-2 py-1 border-2 outline-none rounded ${props.error && "border-red-600"}`}
      ></input>
      {props.error && <p className="text-red-600">{props.errorMsg}</p>}
    </div>
  );
};
export default Input;
