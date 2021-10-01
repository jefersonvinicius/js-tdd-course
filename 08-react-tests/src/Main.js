import React from 'react';
import PropTypes from 'prop-types';

const Component = () => <header></header>;

Component.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Component;
