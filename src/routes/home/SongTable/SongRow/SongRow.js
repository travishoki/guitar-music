import React from "react";
import { Link } from "react-router-dom";
import GuitarTabLink from "../../../../components/common/GuitarTabLink";

const SongRow = ({ isGuitarMode, song }) => {
  const rowStyle = {
    display: "flex",
    justifyContent: "space-between",
    padding: 10,
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
    <div style={rowStyle}>
      <Link to={"/song/" + fixUrlTitle(song.title)} style={linkStyle}>
        <p className="title-font" style={titleStyle}>
          {song.title}
        </p>
        <p className="secondary-text-color" style={artistStyle}>
          {song.artist}
          {song.barChords && "*"}
        </p>
      </Link>
      {isGuitarMode && <GuitarTabLink song={song} />}
    </div>
  );
};

export default SongRow;
