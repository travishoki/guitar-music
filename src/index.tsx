/* global document */
import React, { useEffect, useState } from 'react';

import { createRoot } from 'react-dom/client';
import toast, { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';

import Footer from './components/Footer/Footer';
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
		const toastMessage = isGuitarMode ? '🎤 Singing mode' : '🎸 Guitar mode';
		const toastOption = {
			duration: 1500,
		};
		toast(toastMessage, toastOption);

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
		<div className="max-container" id="content">
			<Header />
			<Main
				includesBarChord={includesBarChord}
				isGuitarMode={isGuitarMode}
				isdarkMode={isdarkMode}
				onToggleIncludesBarChord={onToggleIncludesBarChord}
				onToggleIsDarkMode={onToggleIsDarkMode}
				onToggleIsGuitarMode={onToggleIsGuitarMode}
			/>
			<Footer />
			<Toaster containerStyle={{ top: 60 }} position="top-center" />
		</div>
	);
};

createRoot(document.getElementById('app')).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
);
