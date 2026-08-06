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
	const [isNavOpen, setIsNavOpen] = useState(true);

	const onToggleNav = () => {
		setIsNavOpen(!isNavOpen);
	};

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
		const toastMessage = includesBarChord
			? '🚫 Hiding bar chord songs'
			: '🎸 Showing bar chord songs';
		const toastOption = {
			duration: 1500,
		};
		toast(toastMessage, toastOption);

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

	useEffect(() => {
		document.body.classList.toggle('nav-collapsed', !isNavOpen);
	}, [isNavOpen]);

	return (
		<div className="max-container" id="content">
			<Header isNavOpen={isNavOpen} onToggleNav={onToggleNav} />
			<Main
				includesBarChord={includesBarChord}
				isGuitarMode={isGuitarMode}
				isdarkMode={isdarkMode}
				onToggleIncludesBarChord={onToggleIncludesBarChord}
				onToggleIsDarkMode={onToggleIsDarkMode}
				onToggleIsGuitarMode={onToggleIsGuitarMode}
			/>
			<Footer />
			<Toaster
				containerStyle={{ top: 'calc(var(--header-height) + 10px)' }}
				position="top-center"
			/>
		</div>
	);
};

createRoot(document.getElementById('app')).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
);
