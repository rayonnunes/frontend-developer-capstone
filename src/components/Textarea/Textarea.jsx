import { PropTypes } from "prop-types";

import "./textarea.css";
import { Label } from "../Label";

export function Textarea({
  id,
  type = "text",
  label,
  placeholder,
  value,
  onChange,
  ...textareaRest
}) {
  return (
    <div>
      {label && <Label htmlFor={id}>{label}</Label>}
      <div className="textarea-container">
        <textarea
          id={id}
          className="textarea"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...textareaRest}
        />
      </div>
    </div>
  );
}

Textarea.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
