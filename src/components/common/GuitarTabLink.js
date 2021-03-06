import React from 'react';
import PropTypes from 'prop-types';

const guitarIcon = require('../../images/icons/guitar-icon.png');

const GuitarTabLink = ({ song }) => (
    <a
        href={song.link}
        target="_blank"
        className="guitar-tab-link"
        title="Go to Guitar Tabs"
    >
        <img
            src={guitarIcon}
            width="30"
            height="30"
        />
    </a>
);

GuitarTabLink.propTypes = {
    song: PropTypes.object.isRequired
};

export default GuitarTabLink;
