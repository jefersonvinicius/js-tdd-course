import React from 'react';
import PropTypes from 'prop-types';

const defaultProps = {
    bgColor: '#ccc',
    textColor: '#fff',
    font: 'sans-serif',
};

function Component({ title, subtitle, bgColor, textColor, font }) {
    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor,
        fontFamily: font,
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
    font: PropTypes.string,
};

Component.propTypes = propTypes;
Component.defaultProps = defaultProps;

export default Component;
