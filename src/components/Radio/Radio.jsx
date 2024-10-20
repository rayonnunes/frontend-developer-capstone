import { PropTypes } from "prop-types";

import "./radio-button.css";
import { Label } from "../Label";

export function RadioButton({
  id,
  label,
  placeholder,
  value,
  orientation = "column",
  onChange,
  ...inputRest
}) {
  return (
    <div className={`radio-button-container ${orientation}`}>
        <input
          id={id}
          className="radio-button"
          type="radio"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...inputRest}
        />
      {label && <Label htmlFor={id}>{label}</Label>}
    </div>
  );
}

RadioButton.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  orientation: PropTypes.string,
  onChange: PropTypes.func,
};
