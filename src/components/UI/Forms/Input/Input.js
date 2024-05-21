import React from "react";

const InputField = (props) => {
  const { label, _id, type, onChange } = props;

  return (
    <>
      <label
        htmlFor={_id}
        className={`block text-sm font-medium text-gray-700`}
      >
        {label}
        <input
          name={_id}
          className={`w-full px-3 py-2 border  border-gray-300  rounded-md shadow-sm placeholder-gray-400 sm:text-sm focus: outline-none`}
          id={_id}
          type={type}
          onChange={onChange}
        />
      </label>
    </>
  );
};

export default InputField;
