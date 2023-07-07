import React, { useState } from 'react';

import BarChordToggle from './BarChordToggle/BarChordToggle';
import Genre from './Genre/Genre';
import SongTable from './SongTable/SongTable';
import Sort from './Sort/Sort';
import DarkModeToggle from '../../components/DarkModeToggle/DarkModeToggle';
import GuitarModeToggle from '../../components/GuitarModeToggle/GuitarModeToggle';
import { ALL as GENRE_ALL } from '../../const/genres';
import { TITLE } from '../../const/sort';

const HomePage = ({
	includesBarChord,
	isGuitarMode,
	isdarkMode,
	onToggleIncludesBarChord,
	onToggleIsDarkMode,
	onToggleIsGuitarMode,
}: HomePageTypes) => {
	const [genre, setGenre] = useState(GENRE_ALL);
	const [sortTerm, setSort] = useState(TITLE);

	return (
		<div>
			<div className="top-controls">
				<Sort currentOption={sortTerm} onClick={setSort} />

				<div className="toggle-controls">
					{isGuitarMode && (
						<BarChordToggle
							includesBarChord={includesBarChord}
							onClick={onToggleIncludesBarChord}
						/>
					)}
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

type HomePageTypes = {
	includesBarChord: boolean;
	isGuitarMode: boolean;
	isdarkMode: boolean;
	onToggleIncludesBarChord: () => void;
	onToggleIsDarkMode: () => void;
	onToggleIsGuitarMode: () => void;
};

export default HomePage;
