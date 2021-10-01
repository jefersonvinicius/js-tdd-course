import React from 'react';
import PropTypes from 'prop-types';

const Component = ({ title }) => {
    return <header>{title && <h1>{title}</h1>}</header>;
};

const propTypes = {
    title: PropTypes.string,
};

Component.propTypes = propTypes;

export default Component;
