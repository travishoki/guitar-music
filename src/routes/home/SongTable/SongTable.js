import React from "react";
import { sortBy } from "lodash";
import { SongList } from "../../../const/SongList";
import { ALL, UNCATEGORIZED } from "../../../const/genres";
import SongRow from "./SongRow/SongRow";

const SongTable = ({
  currentEra,
  currentGenre,
  isGuitarMode,
  currentSortTerm,
}) => {
  const filteredSongs = SongList.filter(({ genres }) => {
    if (currentGenre === ALL) return true;
    if (currentGenre === UNCATEGORIZED) {
      return !genres;
    }
    if (!genres) return false;

    return genres.includes(currentGenre);
  }).filter(({ era }) => {
    if (currentEra === ALL) return true;
    if (currentEra === UNCATEGORIZED) {
      return !era;
    }
    if (!era) return false;

    return era === currentEra;
  });

  const finalSongsList = sortBy(filteredSongs, currentSortTerm);

  return (
    <div>
      {finalSongsList.map((song) => (
        <SongRow key={song.title} isGuitarMode={isGuitarMode} song={song} />
      ))}
    </div>
  );
};

export default SongTable;
