import { PropTypes } from 'prop-types';

import './badge.css';

export function Badge({ children, variant = 'primary' }) {

    return (
        <span className={`badge ${variant}-badge`}>{children}</span>
    )
}

Badge.propTypes = {
    children: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary'])
}