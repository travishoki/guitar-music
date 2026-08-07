import React, { useLayoutEffect } from 'react';

import SongTable from './SongTable/SongTable';

// Remembers the home page scroll position across route changes (e.g. going
// into a song and clicking back) so the list stays where it was.
let savedScrollY = 0;

const HomePage = ({
	currentDifficulty,
	currentGenre,
	currentSortTerm,
	includesBarChord,
	isGuitarMode,
}: HomePageTypes) => {
	useLayoutEffect(() => {
		window.scrollTo(0, savedScrollY);

		const onScroll = () => {
			savedScrollY = window.scrollY;
		};

		window.addEventListener('scroll', onScroll, { passive: true });

		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<SongTable
			currentDifficulty={currentDifficulty}
			currentGenre={currentGenre}
			currentSortTerm={currentSortTerm}
			includesBarChord={includesBarChord}
			isGuitarMode={isGuitarMode}
		/>
	);
};

type HomePageTypes = {
	currentDifficulty: string;
	currentGenre: string;
	currentSortTerm: string;
	includesBarChord: boolean;
	isGuitarMode: boolean;
};

export default HomePage;
