import React from 'react';
import PropTypes from 'prop-types';

const defaultProps = {
    bgColor: '#ccc',
    textColor: '#fff',
};

function Component({ title, subtitle, bgColor, textColor }) {
    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
    };

    return (
        <header style={headerStyles}>
            {title && <h1>{title}</h1>}
            {subtitle && <h2>{subtitle}</h2>}
        </header>
    );
}

const propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
};

Component.propTypes = propTypes;
Component.defaultProps = defaultProps;

export default Component;
