import React from "react";

interface InputFieldProps {
  name: string;
  type?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  borderColor?: string;     
  placeholderColor?: string;
  focusColor?: string;      
}

export default function InputField({
  name,
  type = "text",
  value,
  placeholder,
  onChange,
  borderColor = "#ffb74d",
  placeholderColor = "#ffb74d",
  focusColor = "#ffb74d",
}: InputFieldProps) {
  return (
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={`
        w-full px-4 py-2 rounded-full bg-transparent
        transition-all duration-200 focus:outline-none
      `}
      style={{
        border: `1px solid ${borderColor}`,
        color: placeholderColor,
        boxShadow: `0 0 0 0 ${focusColor}`,
      }}
      onFocus={(e) => {
        e.currentTarget.style.boxShadow = `0 0 0 2px ${focusColor}`;
        e.currentTarget.style.borderColor = "transparent";
      }}
      onBlur={(e) => {
        e.currentTarget.style.boxShadow = `0 0 0 0 ${focusColor}`;
        e.currentTarget.style.borderColor = borderColor;
      }}
    />
  );
}
