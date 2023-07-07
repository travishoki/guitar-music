import React from 'react';
import HomePage from '../../routes/home/HomePage';
import SongPage from '../../routes/song/SongPage';
import NotFoundPage from '../../routes/notFound/NotFoundPage';
import { Routes, Route } from 'react-router-dom';

const Main = ({
	includesBarChord,
	isGuitarMode,
	isdarkMode,
	onToggleIncludesBarChord,
	onToggleIsDarkMode,
	onToggleIsGuitarMode,
}) => (
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
				exact
				path="/"
			/>
			<Route element={<SongPage />} path="/song/:title" />
			<Route element={NotFoundPage} path="*" />
		</Routes>
	</main>
);

export default Main;
