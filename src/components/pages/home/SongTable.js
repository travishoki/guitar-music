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
import Genre from "./Genre/Genre";
import { GENRE_ALL } from "./Genre/const";

class SongTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      sort: "title",
      genre: GENRE_ALL,
    };

    this.onSelectGenre = this.onSelectGenre.bind(this);
    this.searchSong = this.searchSong.bind(this);
  }
  searchSong(e) {
    console.log("searchSong");
    const search = e.currentTarget.value;
    this.setState({ search });
  }
  onSelectGenre(newGenre) {
    console.log(`newGenre: ${newGenre}`);
    this.setState({ genre: newGenre });
  }

  render() {
    const filterTerm = this.state.search.toLowerCase();
    const sortTerm = this.state.sort;
    const filteredSongs = SongList.filter((song) => {
      const title = song.title.toLowerCase();
      return filterTerm == "" || title.indexOf(filterTerm) > -1;
    })
      .filter((song) => {
        if (this.state.genre === GENRE_ALL) return true;
        if (!song.genres) return false;
        return song.genres.includes(this.state.genre);
      })
      .sort((a, b) => {
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
        <Genre currentGenre={this.state.genre} onClick={this.onSelectGenre} />
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
