import React from "react";
import { Link } from "react-router-dom";
import { sortBy } from "lodash";
import SongList from "../../../const/SongList";
import GuitarTabLink from "../../../components/common/GuitarTabLink";
import { ALL } from "../../../const/genres";

const SongTable = ({ genre, isGuitarMode, sortTerm }) => {
  const filteredSongs = SongList.filter((song) => {
    if (genre === ALL) return true;
    if (!song.genres) return false;
    return song.genres.includes(genre);
  });

  const finalSongsList = sortBy(filteredSongs, sortTerm);

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
    <table className="song-table">
      <tbody>
        {finalSongsList.map((song) => (
          <tr key={song.title}>
            <td style={tdStyle}>
              <Link to={"/song/" + fixUrlTitle(song.title)} style={linkStyle}>
                <p className="title-font" style={titleStyle}>
                  {song.title}
                </p>
                <p className="secondary-text-color" style={artistStyle}>
                  {song.artist}
                </p>
                {song.barCords && <p>Bar</p>}
              </Link>
            </td>
            {isGuitarMode && (
              <td style={ctrlTdStyle}>
                <GuitarTabLink song={song} />
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SongTable;
