import React from "react";

interface SelectFieldProps {
  name: string;
  value?: string;
  options: { label: string; value: string }[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function SelectField({ name, value, options, onChange }: SelectFieldProps) {
  return (
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="
        w-full px-4 py-2
        bg-transparent
        border border-[#ffb74d]
        rounded-full
        text-[#ffb74d]
        focus:outline-none focus:ring-2 focus:ring-[#ffb74d]/80 focus:border-transparent
        transition-all duration-200
        appearance-none
        cursor-pointer
      "
    >
      <option value="" disabled hidden className="flex">
        Selecione...
      </option>
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          className="bg-[#1a1a1a] text-[#ffb74d]"
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}
