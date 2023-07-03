import React, { useState } from "react";
import SongTable from "./SongTable/SongTable";
import Genre from "./Genre/Genre";
import Sort from "./Sort/Sort";
import { TITLE } from "../../const/sort";
import { ALL } from "../../const/genres";

const HomePage = ({ isGuitarMode }) => {
  const [sortTerm, setSort] = useState(TITLE);
  const [genre, setGenre] = useState(ALL);

  return (
    <div>
      <Genre currentOption={genre} onClick={setGenre} />
      <Sort currentOption={sortTerm} onClick={setSort} sortTerm={sortTerm} />
      <SongTable
        isGuitarMode={isGuitarMode}
        genre={genre}
        sortTerm={sortTerm}
      />
    </div>
  );
};

export default HomePage;
