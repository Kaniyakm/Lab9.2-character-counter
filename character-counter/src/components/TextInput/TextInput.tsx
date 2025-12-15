import React from "react";
import { TextInputProps } from "../../types";

/**
 * STEP 1: Basic component scaffold
 * --------------------------------
 * This component:
 * - Accepts text input
 * - Sends the updated text back to the parent via onTextChange
 * - Uses optional placeholder + initialValue
 *
 * Logic will be expanded in later steps.
 */

export const TextInput: React.FC<TextInputProps> = ({
  onTextChange,
  placeholder = "Start typing...",
  initialValue = "",
}) => {
  return (
    <div className="w-full">
      <textarea
        className="w-full p-4 border border-gray-300 rounded-lg"
        placeholder={placeholder}
        defaultValue={initialValue}
        onChange={(e) => onTextChange(e.target.value)} // send text upward
        rows={6}
      />
    </div>
  );
};
 

/**
 * STEP 2:
 * Convert TextInput into a controlled component.
 * - Internal state tracks the textarea value
 * - useEffect notifies parent whenever text changes
 */

export const TextInput: React.FC<TextInputProps> = ({
  onTextChange,
  placeholder = "Start typing...",
  initialValue = "",
}) => {
  const [value, setValue] = useState(initialValue);

  // Notify parent whenever the text changes
  useEffect(() => {
    onTextChange(value);
  }, [value, onTextChange]);

  return (
    <div className="w-full">
      <textarea
        className="w-full p-4 border border-gray-300 rounded-lg"
        placeholder={placeholder}
        value={value} // controlled input
        onChange={(e) => setValue(e.target.value)}
        rows={6}
      />
    </div>
  );
};

/**
 * STEP 5: UI Polish
 * ------------------
 * Enhancements:
 * - Converted to a controlled component for consistency
 * - Added smooth transitions for focus states
 * - Added subtle shadow for depth
 * - Improved rounded corners (rounded-xl)
 * - Added resize-none to prevent layout breaking
 * - Added bg-white + text-gray-800 for consistent theming
 */

export const TextInput: React.FC<TextInputProps> = ({
  onTextChange,
  placeholder = "Start typing...",
  initialValue = "",
}) => {
  const [value, setValue] = useState(initialValue);

  // Notify parent when text changes
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