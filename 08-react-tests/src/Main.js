import React from 'react';
import PropTypes from 'prop-types';

function Component({ title, subtitle }) {
    return (
        <header>
            {title && <h1>{title}</h1>}
            {subtitle && <h2>{subtitle}</h2>}
        </header>
    );
}

const propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
};

Component.propTypes = propTypes;

export default Component;
