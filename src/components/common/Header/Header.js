import React from "react";
import { AppBar } from "material-ui";
import DarkModeToggle from "./DarkModeToggle/DarkModeToggle";

const Header = ({ isdarkMode, onToggleIsDarkMode }) => (
  <header>
    <AppBar title="Hoki Campfire Songs" showMenuIconButton={false} />
    <DarkModeToggle
      isdarkMode={isdarkMode}
      onToggleIsDarkMode={onToggleIsDarkMode}
    />
  </header>
);

export default Header;
