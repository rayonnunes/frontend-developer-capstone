import { forwardRef } from "react";
import { PropTypes } from "prop-types";

import "./input.css";
import { Label } from "../Label";

export const Input = forwardRef((props, ref) => {
  const {
    id,
    type = "text",
    label,
    placeholder,
    value,
    onChange,
    Prefix,
    ...inputRest
  } = props;
  return (
    <div className="input-container">
      {label && <Label htmlFor={id}>{label}</Label>}
      <div className="input-field">
        {Prefix}
        <input
          id={id}
          className="input"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          ref={ref}
          {...inputRest}
        />
      </div>
    </div>
  );
});

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  Prefix: PropTypes.node,
  onChange: PropTypes.func,
};
