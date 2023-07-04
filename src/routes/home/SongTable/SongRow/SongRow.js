import React from "react";
import { Link } from "react-router-dom";
import GuitarTabLink from "../../../../components/common/GuitarTabLink";
import SvgBarGraph from "../../../../icons/SvgBarGraph";

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

  const iconBarGraph = {
    height: 20,
    width: 20,
  };

  const rightSectionStyle = {
    alignItems: "center",
    display: "flex",
    justifyContent: "flex-end",
    width: 60,
  };

  const fixUrlTitle = (title) => {
    return title.replace(/ /g, "-").toLowerCase();
  };

  return (
    <div className="bottom-border" style={rowStyle}>
      <Link to={"/song/" + fixUrlTitle(song.title)} style={linkStyle}>
        <p className="title-font" style={titleStyle}>
          {song.title}
        </p>
        <p className="secondary-text-color" style={artistStyle}>
          {song.artist}
        </p>
      </Link>
      {isGuitarMode && (
        <div style={rightSectionStyle}>
          {song.barChords && <SvgBarGraph style={iconBarGraph} />}
          <GuitarTabLink song={song} />
        </div>
      )}
    </div>
  );
};

export default SongRow;
