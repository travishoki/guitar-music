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
				exact
				path="/"
				render={() => (
					<HomePage
						includesBarChord={includesBarChord}
						isGuitarMode={isGuitarMode}
						isdarkMode={isdarkMode}
						onToggleIncludesBarChord={onToggleIncludesBarChord}
						onToggleIsDarkMode={onToggleIsDarkMode}
						onToggleIsGuitarMode={onToggleIsGuitarMode}
					/>
				)}
			/>
			<Route path="/song/:title" render={(props) => <SongPage {...props} />} />
			<Route element={NotFoundPage} path="*" />
		</Routes>
	</main>
);

export default Main;
