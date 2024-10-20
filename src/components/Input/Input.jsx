import { PropTypes } from "prop-types";

import "./input.css";
import { Label } from "../Label";

export function Input({
  id,
  type = "text",
  label,
  placeholder,
  value,
  onChange,
  Prefix,
  ...inputRest
}) {
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
          {...inputRest}
        />
      </div>
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  Prefix: PropTypes.node,
  onChange: PropTypes.func,
};
