import React from 'react';
import PropTypes from 'prop-types';
import {
    containerStyle,
    titleStyle,
    headerStyle,
    subtitleStyle,
    videoStyle,
} from './styles';

const defaultProps = {
    bgColor: '#ccc',
    textColor: '#fff',
    font: 'sans-serif',
    bgImg: '',
};

function Component({
    title,
    subtitle,
    bgColor,
    textColor,
    font,
    bgImg,
    video,
}) {
    const headerStyles = {
        ...headerStyle,
        backgroundColor: bgColor,
        color: textColor,
        fontFamily: font,
        backgroundImage: `url(${bgImg})`,
    };

    return (
        <header style={headerStyles}>
            <div style={containerStyle}>
                {title && <h1 style={titleStyle}>{title}</h1>}
                {subtitle && <h2 style={subtitleStyle}>{subtitle}</h2>}
            </div>
            {video && (
                <video style={videoStyle} src={video} autoPlay loop muted />
            )}
        </header>
    );
}

const propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    font: PropTypes.string,
    bgImg: PropTypes.string,
    video: PropTypes.string,
};

Component.propTypes = propTypes;
Component.defaultProps = defaultProps;

export default Component;
