import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SongList from "../../../const/SongList";
import GuitarTabLink from "../../../components/common/GuitarTabLink";
import Genre from "../Genre/Genre";
import { ALL } from "../../../const/genres";

const SongTable = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("title");
  const [genre, setGenre] = useState(ALL);

  const searchSong = (e) => {
    console.log("searchSong");
    const newSearch = e.currentTarget.value;
    setSearch(newSearch);
  };

  const onSelectGenre = (newGenre) => {
    setGenre(newGenre);
  };

  const filterTerm = search.toLowerCase();
  const sortTerm = sort;
  const filteredSongs = SongList.filter((song) => {
    const title = song.title.toLowerCase();
    return filterTerm == "" || title.indexOf(filterTerm) > -1;
  })
    .filter((song) => {
      if (genre === ALL) return true;
      if (!song.genres) return false;
      return song.genres.includes(genre);
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

  const fixUrlTitle = (title) => {
    return title.replace(/ /g, "-").toLowerCase();
  };

  return (
    <div>
      <Genre currentGenre={genre} onClick={onSelectGenre} />
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
};

export default SongTable;
