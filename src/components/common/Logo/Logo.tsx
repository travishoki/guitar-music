import React from 'react';

import logo from '../../../images/logo-large.png';

// Fixed over the top of the header (see .logo in app.less); it grows and
// shrinks with the menu rather than being sized by the header box.
const Logo = () => (
	<img alt="Hoki Campfire Songs" className="logo" src={logo} />
);

export default Logo;
