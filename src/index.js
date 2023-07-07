/* global document */
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
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
		<div className={isdarkMode ? 'dark-mode' : 'light-mode'} id="container">
			<div id="content">
				<Header />
				<Main
					includesBarChord={includesBarChord}
					isGuitarMode={isGuitarMode}
					isdarkMode={isdarkMode}
					onToggleIncludesBarChord={onToggleIncludesBarChord}
					onToggleIsDarkMode={onToggleIsDarkMode}
					onToggleIsGuitarMode={onToggleIsGuitarMode}
				/>
			</div>
		</div>
	);
};

createRoot(document.getElementById('app')).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
);
