import React, { useState } from 'react';
import SongTable from './SongTable/SongTable';
import Genre from './Genre/Genre';
import Sort from './Sort/Sort';
import { TITLE } from '../../const/sort';
import { ALL as GENRE_ALL } from '../../const/genres';
import BarChordToggle from '../../components/BarChordToggle/BarChordToggle';
import DarkModeToggle from '../../components/DarkModeToggle/DarkModeToggle';
import GuitarModeToggle from '../../components/GuitarModeToggle/GuitarModeToggle';

const HomePage = ({
	includesBarChord,
	isGuitarMode,
	isdarkMode,
	onToggleIncludesBarChord,
	onToggleIsDarkMode,
	onToggleIsGuitarMode,
}) => {
	const [genre, setGenre] = useState(GENRE_ALL);
	const [sortTerm, setSort] = useState(TITLE);

	return (
		<div>
			<div className="top-controls">
				<Sort currentOption={sortTerm} onClick={setSort} />

				<div className="toggle-controls">
					<BarChordToggle
						includesBarChord={includesBarChord}
						onClick={onToggleIncludesBarChord}
					/>
					<DarkModeToggle
						isdarkMode={isdarkMode}
						onClick={onToggleIsDarkMode}
					/>
					<GuitarModeToggle
						isGuitarMode={isGuitarMode}
						onClick={onToggleIsGuitarMode}
					/>
				</div>
			</div>

			<Genre currentOption={genre} onClick={setGenre} />
			<SongTable
				currentGenre={genre}
				currentSortTerm={sortTerm}
				includesBarChord={includesBarChord}
				isGuitarMode={isGuitarMode}
			/>
		</div>
	);
};

export default HomePage;
