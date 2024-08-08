import React from 'react'

const Input = ({label, pholder, idFor, value, onChange}) => {
  return (
    <>
      <label htmlFor={idFor} className="mt-5 px-1">
        {label}
      </label>
      <input
        onChange={onChange}
        value={value}
        placeholder={pholder}
        className="px-3 text-lg w-full h-14 outline-none border-2 border-neutral-400 rounded-lg"
        type="text"
        id={idFor}
      />
    </>
  );
}

export default Input
