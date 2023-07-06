import React, { useState } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/common/Header/Header';
import Main from './components/common/Main';
import './styles/index.less';

const App = () => {
	const [isdarkMode, setIsdarkMode] = useState(true);
	const [isGuitarMode, setIsGuitarMode] = useState(false);
	const [includesBarChord, setIncludesBarChord] = useState(true);

	const onToggleIsDarkMode = () => {
		setIsdarkMode(!isdarkMode);
	};

	const onToggleIsGuitarMode = () => {
		setIsGuitarMode(!isGuitarMode);
		setIncludesBarChord(true);
	};

	const onToggleIncludesBarChord = () => {
		setIncludesBarChord(!includesBarChord);
	};

	return (
		<div id="container" className={isdarkMode ? 'dark-mode' : 'light-mode'}>
			<div id="content">
				<Header />
				<Main
					includesBarChord={includesBarChord}
					isGuitarMode={isGuitarMode}
					isdarkMode={isdarkMode}
					onToggleIsDarkMode={onToggleIsDarkMode}
					onToggleIsGuitarMode={onToggleIsGuitarMode}
					onToggleIncludesBarChord={onToggleIncludesBarChord}
				/>
			</div>
		</div>
	);
};

render(
	<BrowserRouter basename="/guitar">
		<App />
	</BrowserRouter>,
	document.getElementById('app'),
);
