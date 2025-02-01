import React from "react";
import Input from "../atoms/Input";
import Label from "../atoms/Label";

const InputFloatingLabel = ({
  type,
  onChange,
  onBlur,
  value,
  id,
  name,
  placeholder = " ",
  htmlFor,
  children,
  icon,
  containerProps,
}) => {
  return (
    <div className={`relative ${containerProps}`}>
      <Input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className="input-autofill block px-4 pb-2.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-800 focus:border-2 peer"
      />
      <Label
        htmlFor={htmlFor}
        className="absolute text-sm text-gray-500  duration-300 transform-translate-y-4 scale-75 -top-[9px] z-10 origin-[0] bg-white px-2 peer-placeholder-shown:text-gray-400 peer-focus:px-2 peer-focus:text-blue-800 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[17px] start-3 pointer-events-none"
      >
        {children}
      </Label>
      {icon && (
        <span className="absolute top-1/2 -translate-y-1/2 right-5">
          {icon}
        </span>
      )}
    </div>
  );
};

export default InputFloatingLabel;
