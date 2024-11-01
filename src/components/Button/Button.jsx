import { PropTypes } from "prop-types";

import "./button.css";
import { forwardRef } from "react";

export const Button = forwardRef((props, ref) => {
  const { children, variant = "primary", ...rest } = props;
  return (
    <button ref={ref} className={`button ${variant}-button`} {...rest}>
      {children}
    </button>
  );
});

Button.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary"]),
};
