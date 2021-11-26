import React from "react";

const Input = ({ placeholder }) => {
  return (
    <input
      class=" transition duration-500 transform hover:translate-y-1 hover:scale-103 mb-6  w-full py-4 border-sdark  border-2 hover:border-gray-200 rounded-lg bg-sdark text-gray-200 px-4  outline-none "
      id="inline-password"
      placeholder={placeholder}
    />
  );
};

export default Input;
