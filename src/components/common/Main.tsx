import React from 'react';

import { Routes, Route } from 'react-router-dom';

import HomePage from '../../routes/home/HomePage';
import NotFoundPage from '../../routes/notFound/NotFoundPage';
import SongPage from '../../routes/song/SongPage';

const Main = ({
	includesBarChord,
	isGuitarMode,
	isdarkMode,
	onToggleIncludesBarChord,
	onToggleIsDarkMode,
	onToggleIsGuitarMode,
}: MainTypes) => (
	<main>
		<Routes>
			<Route
				element={
					<HomePage
						includesBarChord={includesBarChord}
						isGuitarMode={isGuitarMode}
						isdarkMode={isdarkMode}
						onToggleIncludesBarChord={onToggleIncludesBarChord}
						onToggleIsDarkMode={onToggleIsDarkMode}
						onToggleIsGuitarMode={onToggleIsGuitarMode}
					/>
				}
				path="/"
			/>
			<Route element={<SongPage />} path="/song/:title" />
			<Route element={<NotFoundPage />} path="*" />
		</Routes>
	</main>
);

type MainTypes = {
	includesBarChord: boolean;
	isGuitarMode: boolean;
	isdarkMode: boolean;
	onToggleIncludesBarChord: () => void;
	onToggleIsDarkMode: () => void;
	onToggleIsGuitarMode: () => void;
};

export default Main;
