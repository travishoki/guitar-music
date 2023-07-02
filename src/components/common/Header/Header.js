import React from "react";
import DarkModeToggle from "./DarkModeToggle/DarkModeToggle";

const Header = ({ isdarkMode, onToggleIsDarkMode }) => (
  <header>
    <h1>Hoki Campfire Songs</h1>
    <DarkModeToggle
      isdarkMode={isdarkMode}
      onToggleIsDarkMode={onToggleIsDarkMode}
    />
  </header>
);

export default Header;
