import React from "react";
import PropTypes from "prop-types";

import SvgGuitar from "../../icons/SvgGuitar";

const GuitarTabLink = ({ song }) => {
  const { link } = song;

  if (!link) return null;

  return (
    <a
      href={link}
      target="_blank"
      className="guitar-tab-link"
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
