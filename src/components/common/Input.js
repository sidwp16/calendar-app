import React from "react";

const Input = ({ label, name, value, onChange, focus, type = "text" }) => (
  <>
    <div className="form-group">
      <label className="form-label">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        key={name}
        onChange={onChange}
        className="form-control col-form-label-sm"
        id={name}
        autoFocus={focus}
      />
    </div>
  </>
);

export default Input;
