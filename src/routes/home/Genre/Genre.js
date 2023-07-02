import React from "react";
import { GENRE_ALL, GENRE_FOLK, GENRE_TRADITIONAL } from "./const";

const GENRE_LIST = [GENRE_ALL, GENRE_FOLK, GENRE_TRADITIONAL];

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
