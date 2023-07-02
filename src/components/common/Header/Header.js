import React from "react";
import DarkModeToggle from "./DarkModeToggle/DarkModeToggle";

const Header = ({ isdarkMode, onToggleIsDarkMode }) => (
  <header>
    <h1>Hoki Campfire Songs</h1>
    <div className="controls">
      <DarkModeToggle
        isdarkMode={isdarkMode}
        onToggleIsDarkMode={onToggleIsDarkMode}
      />
    </div>
  </header>
);

export default Header;
