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
        const filteredSongs = SongList
            .filter((song) => {
                const title = song.title.toLowerCase();
                return filterTerm == '' || title.indexOf(filterTerm) > -1;
            })
            .sort((a, b) => {
                if (a.title < b.title)
                  return -1;
                if (a.title > b.title)
                  return 1;
                return 0;
            });
        const tdStyle = {
            paddingLeft: 10,
            paddingRight: 10,
        };
        const ctrlTdStyle = {
            paddingLeft: 10,
            paddingRight: 10,
            width: '32px'
        };
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
                            <TableHeaderColumn style={ctrlTdStyle}>Link</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {filteredSongs.map((song) => (
                            <TableRow key={song.title}>
                                <TableRowColumn
                                    style={tdStyle}
                                >{song.title}</TableRowColumn>
                                <TableRowColumn
                                    style={tdStyle}
                                >{song.artist}</TableRowColumn>
                                <TableRowColumn
                                    style={ctrlTdStyle}
                                >
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
