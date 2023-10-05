import React from "react";

const Input = ({ id, label, onChange, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        name={id}
        onChange={onChange}
        // onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </>
  );
};

export default Input;
