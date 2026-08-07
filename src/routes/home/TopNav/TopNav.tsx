import React from 'react';

import DarkModeToggle from '../../../components/DarkModeToggle/DarkModeToggle';
import GuitarModeToggle from '../../../components/GuitarModeToggle/GuitarModeToggle';
import Controls from '../../../components/common/Controls/Controls';
import BarChordToggle from '../BarChordToggle/BarChordToggle';
import Difficulty from '../Difficulty/Difficulty';
import Genre from '../Genre/Genre';
import Sort from '../Sort/Sort';

// The stack of song-list controls (sort, mode toggles, difficulty, genre). Lives
// in the header so it sits alongside the logo; the state it drives is owned by
// App, since the SongTable in main reads the same filters.
const TopNav = ({
	currentDifficulty,
	currentGenre,
	currentSort,
	includesBarChord,
	isGuitarMode,
	isdarkMode,
	onDifficulty,
	onGenre,
	onSort,
	onToggleIncludesBarChord,
	onToggleIsDarkMode,
	onToggleIsGuitarMode,
}: TopNavTypes) => (
	<div className="top-nav">
		<Sort currentOption={currentSort} onClick={onSort} />

		<Controls className="toggle-controls">
			{isGuitarMode && (
				<BarChordToggle
					includesBarChord={includesBarChord}
					onClick={onToggleIncludesBarChord}
				/>
			)}
			<DarkModeToggle isdarkMode={isdarkMode} onClick={onToggleIsDarkMode} />
			<GuitarModeToggle
				isGuitarMode={isGuitarMode}
				onClick={onToggleIsGuitarMode}
			/>
		</Controls>

		<Difficulty currentOption={currentDifficulty} onClick={onDifficulty} />

		<Genre currentOption={currentGenre} onClick={onGenre} />
	</div>
);

type TopNavTypes = {
	currentDifficulty: string;
	currentGenre: string;
	currentSort: string;
	includesBarChord: boolean;
	isGuitarMode: boolean;
	isdarkMode: boolean;
	onDifficulty: (option: string) => void;
	onGenre: (option: string) => void;
	onSort: (option: string) => void;
	onToggleIncludesBarChord: () => void;
	onToggleIsDarkMode: () => void;
	onToggleIsGuitarMode: () => void;
};

export default TopNav;
