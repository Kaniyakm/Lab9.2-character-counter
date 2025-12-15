import React, { useState, useEffect } from "react";
import type { TextInputProps } from "../../types";

/**
 * TEXT INPUT COMPONENT
 * Final, single declaration
 */
export const TextInput: React.FC<TextInputProps> = ({
  onTextChange,
  placeholder = "Start typing...",
  initialValue = "",
}) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    onTextChange(value);
  }, [value, onTextChange]);

  return (
    <div className="w-full">
      <textarea
        className="
          w-full 
          p-4 
          border border-gray-300 
          rounded-xl 
          shadow-sm 
          bg-white 
          text-gray-800 
          focus:outline-none 
          focus:ring-2 
          focus:ring-blue-500 
          focus:border-blue-500 
          transition 
          duration-200 
          resize-none
        "
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={6}
      />
    </div>
  );
};