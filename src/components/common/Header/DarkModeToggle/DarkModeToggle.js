import React from "react";

import SvgMoon from "../../../../icons/SvgMoon/SvgMoon";
import SvgSun from "../../../../icons/SvgSun/SvgSun";

const DarkModeToggle = ({ isdarkMode, onToggleIsDarkMode }) => (
  <button onClick={onToggleIsDarkMode}>
    {isdarkMode ? <SvgMoon /> : <SvgSun />}
  </button>
);

export default DarkModeToggle;
