import React from "react";
import { Link } from "react-router-dom";
import SongList from "../../common/SongList";
import GuitarTabLink from "../../common/GuitarTabLink";

class SongPage extends React.Component {
  constructor(props) {
    super(props);

    const title = props.match.params.title;
    const song = SongList.filter((songListItem) => {
      return songListItem.title.replace(/ /g, "-").toLowerCase() === title;
    })[0];

    this.state = {
      song,
    };
  }
  render() {
    const song = this.state.song;
    return (
      <div id="songPage">
        <Link to="/" className="back-button">
          Back
        </Link>
        <h1>{song.title}</h1>
        <p>by {song.artist}</p>
        {song.lyrics && (
          <div className="lyrics">
            <song.lyrics />
          </div>
        )}
        <div className="go-to-tabs">
          <GuitarTabLink song={song} />
          <p>Go to tabs</p>
        </div>
      </div>
    );
  }
}

export default SongPage;
