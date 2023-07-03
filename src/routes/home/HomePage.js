import React, { useState } from "react";
import SongTable from "./SongTable/SongTable";
import Genre from "./Genre/Genre";
import Sort from "./Sort/Sort";
import { TITLE } from "../../const/sort";
import { ALL } from "../../const/genres";
import DarkModeToggle from "../../components/DarkModeToggle/DarkModeToggle";
import GuitarModeToggle from "../../components/GuitarModeToggle/GuitarModeToggle";

const HomePage = ({
  isdarkMode,
  isGuitarMode,

  onToggleIsDarkMode,
  onToggleIsGuitarMode,
}) => {
  const [sortTerm, setSort] = useState(TITLE);
  const [genre, setGenre] = useState(ALL);

  return (
    <div>
      <div className="top-controls">
        <Sort currentOption={sortTerm} onClick={setSort} sortTerm={sortTerm} />

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
      <SongTable
        isGuitarMode={isGuitarMode}
        genre={genre}
        sortTerm={sortTerm}
      />
    </div>
  );
};

export default HomePage;
