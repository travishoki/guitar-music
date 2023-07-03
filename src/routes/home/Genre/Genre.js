import React from "react";
import { GENRE_LIST } from "../../../const/genres";
import SideSCrollSelector from "../../../components/SideScrollSelector/SideScrollSelector";

const Genre = ({ currentOption, onClick }) => (
  <SideSCrollSelector
    currentOption={currentOption}
    list={GENRE_LIST}
    onClick={onClick}
  />
);

export default Genre;
