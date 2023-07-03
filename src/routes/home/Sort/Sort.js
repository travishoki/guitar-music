import React from "react";
import { SORT_LIST } from "../../../const/sort";

const Sort = ({ currentGenre, onClick }) => (
  <div className="genre-filters">
    <ul>
      {SORT_LIST.map((genre) => (
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

export default Sort;
