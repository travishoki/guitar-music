import React from "react";

import SvgGuitar from "../../icons/SvgGuitar";
import SvgMic from "../../icons/SvgMic";

const GuitarModeToggle = ({ isGuitarMode, onToggleIsGuitarMode }) => (
  <button onClick={onToggleIsGuitarMode}>
    {isGuitarMode ? <SvgGuitar /> : <SvgMic />}
  </button>
);

export default GuitarModeToggle;