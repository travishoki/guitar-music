import React from "react";
import * as GENRE from "../../../const/genres";

const GENRE_LIST = [
  GENRE.GENRE_ALL,
  GENRE.GENRE_FOLK,
  GENRE.GENRE_PATRIOTIC,
  GENRE.GENRE_ROCK,
  GENRE.GENRE_TRADITIONAL,
];

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
