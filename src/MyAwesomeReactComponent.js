import React, { PropTypes } from 'react';
import List from './list';
import SongItem from './SongItem';

const MyAwesomeReactComponent = ({loading}) => {
    return (
        <ul>
            {List.map((song) => (
                <li key={song.title}>
                    <SongItem song={song}/>
                </li>
            ))}
        </ul>
    );
};

export default MyAwesomeReactComponent;
