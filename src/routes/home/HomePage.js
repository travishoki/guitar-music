import React, { useState } from "react";
import SongTable from "./SongTable/SongTable";
import Era from "./Era/Era";
import Genre from "./Genre/Genre";
import Sort from "./Sort/Sort";
import { TITLE } from "../../const/sort";
import { ALL as ERA_ALL } from "../../const/eras";
import { ALL as GENRE_ALL } from "../../const/genres";
import DarkModeToggle from "../../components/DarkModeToggle/DarkModeToggle";
import GuitarModeToggle from "../../components/GuitarModeToggle/GuitarModeToggle";

const HomePage = ({
  isdarkMode,
  isGuitarMode,

  onToggleIsDarkMode,
  onToggleIsGuitarMode,
}) => {
  const [era, setEra] = useState(ERA_ALL);
  const [genre, setGenre] = useState(GENRE_ALL);
  const [sortTerm, setSort] = useState(TITLE);

  return (
    <div>
      <div className="top-controls">
        <Sort currentOption={sortTerm} onClick={setSort} />

        <div className="toggle-controls">
          <DarkModeToggle
            isdarkMode={isdarkMode}
            onToggleIsDarkMode={onToggleIsDarkMode}
          />
          <GuitarModeToggle
            isGuitarMode={isGuitarMode}
            onToggleIsGuitarMode={onToggleIsGuitarMode}
          />
        </div>
      </div>

      <Genre currentOption={genre} onClick={setGenre} />
      <Era currentOption={era} onClick={setEra} />
      <SongTable
        currentEra={era}
        currentGenre={genre}
        isGuitarMode={isGuitarMode}
        currentSortTerm={sortTerm}
      />
    </div>
  );
};

export default HomePage;
