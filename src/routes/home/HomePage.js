import React from "react";
import SongTable from "./SongTable/SongTable";

const HomePage = ({ isGuitarMode }) => (
  <SongTable isGuitarMode={isGuitarMode} />
);

export default HomePage;
