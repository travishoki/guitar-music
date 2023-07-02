import React from "react";

const GENRE_LIST = ["All", "Folk", "Traditional"];

const Genre = ({ currentGenre, onClick }) => (
  <div id="genre-filters">
    <ul>
      {GENRE_LIST.map((genre) => (
        <li key={genre} className={genre === currentGenre ? "active" : ""}>
          <button onClick={() => onClick(genre)}>{genre}</button>
        </li>
      ))}
    </ul>
  </div>
);

export default Genre;
