import React from "react";
import { sortBy } from "lodash";
import { SongList } from "../../../const/SongList";
import { ALL } from "../../../const/genres";
import SongRow from "./SongRow/SongRow";

const SongTable = ({ genre, isGuitarMode, sortTerm }) => {
  const filteredSongs = SongList.filter((song) => {
    if (genre === ALL) return true;
    if (!song.genres) return false;
    return song.genres.includes(genre);
  });

  const finalSongsList = sortBy(filteredSongs, sortTerm);

  return (
    <div>
      {finalSongsList.map((song) => (
        <SongRow key={song.title} isGuitarMode={isGuitarMode} song={song} />
      ))}
    </div>
  );
};

export default SongTable;
