import React from "react";

const Input = ({
  type,
  onChange,
  onBlur,
  value,
  id,
  name,
  className,
  placeholder,
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default Input;
