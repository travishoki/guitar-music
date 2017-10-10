import React, { PropTypes } from 'react';
import List from './list';
import {
    Table,
    TableHeader,
    TableHeaderColumn,
    TableBody,
    TableRow,
    TableRowColumn
} from 'material-ui';

const SongList = () => {
    return (
        <div>
            <Table>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                    <TableRow>
                        <TableHeaderColumn>Title</TableHeaderColumn>
                        <TableHeaderColumn>Artist</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    {List.map((song) => (
                        <TableRow>
                            <TableRowColumn>
                                <a href={song.link} target="_blank">{song.title}</a>
                            </TableRowColumn>
                            <TableRowColumn>{song.artist}</TableRowColumn>
                        </TableRow>
                    ))}

                </TableBody>
            </Table>
        </div>
    );
};

export default SongList;
