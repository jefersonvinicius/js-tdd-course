import React from 'react';
import PropTypes from 'prop-types';

const defaultProps = {
    bgColor: '#ccc',
};

function Component({ title, subtitle, bgColor }) {
    const headerStyles = {
        backgroundColor: bgColor,
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
};

Component.propTypes = propTypes;
Component.defaultProps = defaultProps;

export default Component;
