import React, { PropTypes } from 'react';
import SongList from './SongList';
import {
    Table,
    TableHeader,
    TableHeaderColumn,
    TableBody,
    TableRow,
    TableRowColumn
} from 'material-ui';

class SongTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: ''
        };

        this.searchSong = this.searchSong.bind(this);
    }
    searchSong(e) {
        console.log('searchSong');
        const search = e.currentTarget.value;
        this.setState({ search });
    }
    render() {
        const filterTerm = this.state.search.toLowerCase();
        const filteredSongs = SongList.filter((song) => {
            const title = song.title.toLowerCase();
            return filterTerm == '' || title.indexOf(filterTerm) > -1;
        });
        return (
            <div>
                {/*
                <input
                    type="text"
                    value={this.state.search}
                    onChange={this.searchSong}
                />
                */}
                <Table>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn>Title</TableHeaderColumn>
                            <TableHeaderColumn>Artist</TableHeaderColumn>
                            <TableHeaderColumn>Link</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {filteredSongs.map((song) => (
                            <TableRow key={song.title}>
                                <TableRowColumn>{song.title}</TableRowColumn>
                                <TableRowColumn>{song.artist}</TableRowColumn>
                                <TableRowColumn>
                                    <a href={song.link} target="_blank">
                                        <img
                                            src="http://www.iconarchive.com/download/i97937/flat-icons.com/flat/Guitar.ico"
                                            width="30"
                                            height="30"
                                        />
                                    </a>
                                </TableRowColumn>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </div>
        );
    }
};

export default SongTable;
