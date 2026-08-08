/* global document, sessionStorage, location, URLSearchParams */
import React, { useEffect, useState } from 'react';

import { createRoot } from 'react-dom/client';
import toast, { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/common/Header/Header';
import Main from './components/common/Main';
import { ALL } from './const/filters';
import { TITLE } from './const/sort';
import useIsRootPath from './hooks/useIsRootPath';
import TopNav from './routes/home/TopNav/TopNav';
import './styles/index.less';

const App = () => {
	const [isdarkMode, setIsdarkMode] = useState(
		() => sessionStorage.getItem('isdarkMode') !== 'false',
	);
	const [isGuitarMode, setIsGuitarMode] = useState(
		() => sessionStorage.getItem('isGuitarMode') === 'true',
	);
	const [includesBarChord, setIncludesBarChord] = useState(true);
	const [isNavOpen, setIsNavOpen] = useState(true);
	const [genre, setGenre] = useState(ALL);
	const [sortTerm, setSort] = useState(TITLE);
	const [difficulty, setDifficulty] = useState(ALL);
	const isRootPath = useIsRootPath();

	// Splash the logo up from the middle of the screen and fade the rest of the
	// content in behind it - but only the first time the app mounts in a
	// session, so reloads within the same tab skip it. The animation is built
	// around the home page layout, so only run it when that's the page we land
	// on. Add `?splash` to the URL to force it again (handy for testing).
	const [isSplash] = useState(() => {
		const onHomePage = location.pathname === '/';
		const forceSplash = new URLSearchParams(location.search).has('splash');
		const hasSplashed = sessionStorage.getItem('hasSplashed') === 'true';
		sessionStorage.setItem('hasSplashed', 'true');

		return onHomePage && (forceSplash || !hasSplashed);
	});

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

	const handleSort = (option: string) => {
		const label = option.charAt(0).toUpperCase() + option.slice(1);
		toast(`Sorting by ${label}`, { duration: 1500 });
		setSort(option);
	};

	useEffect(() => {
		sessionStorage.setItem('isdarkMode', String(isdarkMode));

		if (isdarkMode) {
			document.body.classList.add('dark-mode');
			document.body.classList.remove('light-mode');
		} else {
			document.body.classList.add('light-mode');
			document.body.classList.remove('dark-mode');
		}
	}, [isdarkMode]);

	useEffect(() => {
		sessionStorage.setItem('isGuitarMode', String(isGuitarMode));
	}, [isGuitarMode]);

	useEffect(() => {
		// Off the home page the menu is always closed, which also shrinks the logo.
		document.body.classList.toggle('nav-collapsed', !isNavOpen || !isRootPath);
	}, [isNavOpen, isRootPath]);

	const topNav = (
		<TopNav
			currentDifficulty={difficulty}
			currentGenre={genre}
			currentSort={sortTerm}
			includesBarChord={includesBarChord}
			isGuitarMode={isGuitarMode}
			isdarkMode={isdarkMode}
			onDifficulty={setDifficulty}
			onGenre={setGenre}
			onSort={handleSort}
			onToggleIncludesBarChord={onToggleIncludesBarChord}
			onToggleIsDarkMode={onToggleIsDarkMode}
			onToggleIsGuitarMode={onToggleIsGuitarMode}
		/>
	);

	return (
		<div
			className={isSplash ? 'max-container is-splashing' : 'max-container'}
			id="content"
		>
			<Header
				isNavOpen={isNavOpen}
				isSplash={isSplash}
				onToggleNav={onToggleNav}
				topNav={topNav}
			/>
			<Main
				currentDifficulty={difficulty}
				currentGenre={genre}
				currentSortTerm={sortTerm}
				includesBarChord={includesBarChord}
				isGuitarMode={isGuitarMode}
			/>
			<Footer isGuitarMode={isGuitarMode} />
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
