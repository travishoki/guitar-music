import React, { useLayoutEffect, useState } from 'react';

import toast from 'react-hot-toast';

import BarChordToggle from './BarChordToggle/BarChordToggle';
import Genre from './Genre/Genre';
import SongTable from './SongTable/SongTable';
import Sort from './Sort/Sort';
import DarkModeToggle from '../../components/DarkModeToggle/DarkModeToggle';
import GuitarModeToggle from '../../components/GuitarModeToggle/GuitarModeToggle';
import { ALL } from '../../const/filters';
import { TITLE } from '../../const/sort';

// Remembers the home page scroll position across route changes (e.g. going
// into a song and clicking back) so the list stays where it was.
let savedScrollY = 0;

const HomePage = ({
	includesBarChord,
	isGuitarMode,
	isdarkMode,
	onToggleIncludesBarChord,
	onToggleIsDarkMode,
	onToggleIsGuitarMode,
}: HomePageTypes) => {
	const [genre, setGenre] = useState(ALL);
	const [sortTerm, setSort] = useState(TITLE);

	const handleSort = (option: string) => {
		const label = option.charAt(0).toUpperCase() + option.slice(1);
		toast(`Sorting by ${label}`, { duration: 1500 });
		setSort(option);
	};

	useLayoutEffect(() => {
		window.scrollTo(0, savedScrollY);

		const onScroll = () => {
			savedScrollY = window.scrollY;
		};

		window.addEventListener('scroll', onScroll, { passive: true });

		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<>
			<div className="top-nav">
				<div className="top-controls">
					<Sort currentOption={sortTerm} onClick={handleSort} />

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
			</div>

			<SongTable
				currentGenre={genre}
				currentSortTerm={sortTerm}
				includesBarChord={includesBarChord}
				isGuitarMode={isGuitarMode}
			/>
		</>
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
