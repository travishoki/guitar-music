import React from 'react';

import { Routes, Route } from 'react-router-dom';

import ChordsPage from '../../routes/chords/ChordsPage';
import HomePage from '../../routes/home/HomePage';
import NotFoundPage from '../../routes/notFound/NotFoundPage';
import SongPage from '../../routes/song/SongPage';

const Main = ({
	currentDifficulty,
	currentGenre,
	currentSortTerm,
	includesBarChord,
	isGuitarMode,
}: MainTypes) => (
	<main>
		<Routes>
			<Route
				element={
					<HomePage
						currentDifficulty={currentDifficulty}
						currentGenre={currentGenre}
						currentSortTerm={currentSortTerm}
						includesBarChord={includesBarChord}
						isGuitarMode={isGuitarMode}
					/>
				}
				path="/"
			/>
			<Route element={<SongPage />} path="/song/:title" />
			<Route element={<ChordsPage />} path="/chords" />
			<Route element={<NotFoundPage />} path="*" />
		</Routes>
	</main>
);

type MainTypes = {
	currentDifficulty: string;
	currentGenre: string;
	currentSortTerm: string;
	includesBarChord: boolean;
	isGuitarMode: boolean;
};

export default Main;
