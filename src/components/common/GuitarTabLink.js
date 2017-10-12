import React from 'react';
import PropTypes from 'prop-types';

const GuitarTabLink = ({ song }) => (
    <a
        href={song.link}
        target="_blank"
        className="guitar-tab-link"
        title="Go to Guitar Tabs"
    >
        <img
            src="http://www.iconarchive.com/download/i97937/flat-icons.com/flat/Guitar.ico"
            width="30"
            height="30"
        />
    </a>
);

GuitarTabLink.propTypes = {
    song: PropTypes.object.isRequired
};

export default GuitarTabLink;
