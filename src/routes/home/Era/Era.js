import React from "react";
import { ERA_LIST } from "../../../const/eras";
import SideSCrollSelector from "../../../components/SideScrollSelector/SideScrollSelector";

const Era = ({ currentOption, onClick }) => (
  <SideSCrollSelector
    currentOption={currentOption}
    list={ERA_LIST}
    onClick={onClick}
  />
);

export default Era;
