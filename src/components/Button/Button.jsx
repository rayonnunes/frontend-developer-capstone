import { PropTypes } from 'prop-types';

import './button.css';

export function Button({ children, variant = 'primary' }) {
    return (
        <button className={`button ${variant}-button`}>{children}</button>
    )
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary'])
}