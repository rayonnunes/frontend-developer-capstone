import { PropTypes } from 'prop-types'

import './label.css'

export function Label({ children, htmlFor }) {
    return (
        <label className="label" htmlFor={htmlFor}>
            {children}
        </label>
    )
}

Label.propTypes = {
    children: PropTypes.node,
    htmlFor: PropTypes.string,
}