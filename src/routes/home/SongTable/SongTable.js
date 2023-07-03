import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SongList from "../../../const/SongList";
import GuitarTabLink from "../../../components/common/GuitarTabLink";
import Genre from "../Genre/Genre";
import { ALL } from "../../../const/genres";

const SongTable = () => {
  const [sort, setSort] = useState("title");
  const [genre, setGenre] = useState(ALL);

  const onSelectGenre = (newGenre) => {
    setGenre(newGenre);
  };

  const sortTerm = sort;
  const filteredSongs = SongList.filter((song) => {
    if (genre === ALL) return true;
    if (!song.genres) return false;
    return song.genres.includes(genre);
  }).sort((a, b) => {
    if (a[sortTerm] < b[sortTerm]) return -1;
    if (a[sortTerm] > b[sortTerm]) return 1;
    return 0;
  });

  const thStyle = {
    padding: 10,
    textAlign: "left",
  };

  const tdStyle = {
    padding: 10,
  };

  const ctrlTdStyle = {
    padding: 10,
    width: 32,
  };

  const linkStyle = {
    textDecoration: "none",
  };

  const titleStyle = {
    fontSize: 20,
    fontWeight: "bold",
    margin: 0,
    marginBottom: 2,
  };

  const artistStyle = {
    margin: 0,
    fontSize: 14,
  };

  const fixUrlTitle = (title) => {
    return title.replace(/ /g, "-").toLowerCase();
  };

  return (
    <div>
      <Genre currentGenre={genre} onClick={onSelectGenre} />
      <table className="song-table">
        <thead>
          <tr>
            <th style={thStyle}>Title</th>
            <th style={thStyle}>Tabs</th>
          </tr>
        </thead>
        <tbody>
          {filteredSongs.map((song) => (
            <tr key={song.title}>
              <td style={tdStyle}>
                <Link to={"/song/" + fixUrlTitle(song.title)} style={linkStyle}>
                  <p className="title-font" style={titleStyle}>
                    {song.title}
                  </p>
                  <p className="secondary-text-color" style={artistStyle}>
                    {song.artist}
                  </p>
                </Link>
              </td>
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
