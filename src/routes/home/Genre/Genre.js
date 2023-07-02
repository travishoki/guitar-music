import React from "react";
import { GENRE_LIST } from "../../../const/genres";

const Genre = ({ currentGenre, onClick }) => (
  <div id="genre-filters">
    <ul>
      {GENRE_LIST.map((genre) => (
        <li key={genre}>
          <button
            className={genre === currentGenre ? "active" : ""}
            onClick={() => onClick(genre)}
          >
            {genre}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default Genre;
