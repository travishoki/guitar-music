import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
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
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Artist</th>
              <th style={ctrlTdStyle}>Tabs</th>
            </tr>
          </thead>
          <tbody>
            {filteredSongs.map((song) => (
              <tr key={song.title}>
                <td style={tdStyle}>
                  <Link to={"/song/" + fixUrlTitle(song.title)}>
                    {song.title}
                  </Link>
                </td>
                <td style={tdStyle}>{song.artist}</td>
                <td style={ctrlTdStyle}>
                  <GuitarTabLink song={song} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SongTable;
