import { PropTypes } from 'prop-types';

import './button.css';

export function Button({ children, variant = 'primary', ...rest }) {
    return (
        <button className={`button ${variant}-button`} {...rest}>{children}</button>
    )
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary'])
}