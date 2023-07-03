import React from "react";
import PropTypes from "prop-types";

import SvgGuitar from "../../icons/SvgGuitar";

const GuitarTabLink = ({ song }) => {
  const { link } = song;

  if (!link) return null;

  const guitarLink = {
    width: 32,
  };

  return (
    <a
      href={link}
      target="_blank"
      className="guitar-tab-link"
      style={guitarLink}
      title="Go to Guitar Tabs"
    >
      <SvgGuitar />
    </a>
  );
};

GuitarTabLink.propTypes = {
  song: PropTypes.object.isRequired,
};

export default GuitarTabLink;
