import React from 'react';
import PropTypes from 'prop-types';

const SongItem = ({ song }) => {
    return (
        <a  href={song.link}
            alt={song.title}
            target="_blank"
        >{song.title} ({song.artist})</a>
    );
};

SongItem.propTypes = {
    song: PropTypes.object
};

export default SongItem;
