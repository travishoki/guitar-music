import React from "react";
import { sortBy } from "lodash";
import { SongList } from "../../../const/SongList";
import { ALL, UNCATEGORIZED } from "../../../const/genres";
import SongRow from "./SongRow/SongRow";

const SongTable = ({ genre, isGuitarMode, sortTerm }) => {
  const filteredSongs = SongList.filter(({ genres }) => {
    if (genre === ALL) return true;
    if (genre === UNCATEGORIZED) {
      return !genres;
    }
    if (!genres) return false;

    return genres.includes(genre);
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
