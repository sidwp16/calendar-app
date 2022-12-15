import React from "react";

const Select = ({ label, name, onChange, value, options, ref }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <select
        className="form-control col-form-label-sm"
        name={name}
        value={value}
        key={name}
        ref={ref}
        onChange={onChange}
      >
        <option value=""></option>
        {options.map((option) => (
          <option key={option.id} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
