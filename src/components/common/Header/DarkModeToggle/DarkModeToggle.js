import React from "react";

import SvgMoon from "./SvgMoon/SvgMoon";
import SvgSun from "./SvgSun/SvgSun";

const DarkModeToggle = ({ isdarkMode, onToggleIsDarkMode }) => (
  <button onClick={onToggleIsDarkMode}>
    {isdarkMode ? <SvgMoon /> : <SvgSun />}
  </button>
);

export default DarkModeToggle;
