import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Table,
  TableHeader,
  TableHeaderColumn,
  TableBody,
  TableRow,
  TableRowColumn,
} from "material-ui";
import SongList from "../../common/SongList";
import GuitarTabLink from "../../common/GuitarTabLink";

class SongTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      sort: "title",
    };

    this.searchSong = this.searchSong.bind(this);
  }
  searchSong(e) {
    console.log("searchSong");
    const search = e.currentTarget.value;
    this.setState({ search });
  }
  render() {
    const filterTerm = this.state.search.toLowerCase();
    const sortTerm = this.state.sort;
    const filteredSongs = SongList.filter((song) => {
      const title = song.title.toLowerCase();
      return filterTerm == "" || title.indexOf(filterTerm) > -1;
    }).sort((a, b) => {
      if (a[sortTerm] < b[sortTerm]) return -1;
      if (a[sortTerm] > b[sortTerm]) return 1;
      return 0;
    });
    const tdStyle = {
      paddingLeft: 10,
      paddingRight: 10,
    };
    const ctrlTdStyle = {
      paddingLeft: 10,
      paddingRight: 10,
      width: "32px",
    };
    function fixUrlTitle(title) {
      return title.replace(/ /g, "-").toLowerCase();
    }
    return (
      <div>
        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Artist</TableHeaderColumn>
              <TableHeaderColumn style={ctrlTdStyle}>Tabs</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {filteredSongs.map((song) => (
              <TableRow key={song.title}>
                <TableRowColumn style={tdStyle}>
                  <Link to={"/song/" + fixUrlTitle(song.title)}>
                    {song.title}
                  </Link>
                </TableRowColumn>
                <TableRowColumn style={tdStyle}>{song.artist}</TableRowColumn>
                <TableRowColumn style={ctrlTdStyle}>
                  <GuitarTabLink song={song} />
                </TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default SongTable;
