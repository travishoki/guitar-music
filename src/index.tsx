/* global document */
import React, { useEffect, useState } from 'react';

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

	useEffect(() => {
		if (isdarkMode) {
			document.body.classList.add('dark-mode');
			document.body.classList.remove('light-mode');
		} else {
			document.body.classList.add('light-mode');
			document.body.classList.remove('dark-mode');
		}
	}, [isdarkMode]);

	return (
		<div id="container">
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
