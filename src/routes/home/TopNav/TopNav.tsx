/* global document, window */
import React, { useCallback, useEffect, useLayoutEffect, useRef } from 'react';

import SvgGuitar from '~svg/SvgGuitar';
import SvgMic from '~svg/SvgMic';
import SvgMoon from '~svg/SvgMoon';
import SvgSun from '~svg/SvgSun';

import BooleanSelect from '../../../components/common/BooleanSelect/BooleanSelect';
import Difficulty from '../Difficulty/Difficulty';
import Genre from '../Genre/Genre';
import Sort from '../Sort/Sort';

const MODE_ICONS = {
	Guitar: <SvgGuitar />,
	Singing: <SvgMic />,
};

const THEME_ICONS = {
	'Dark Mode': <SvgMoon />,
	'Light Mode': <SvgSun />,
};

// The song-list controls (sort, mode, theme, bar chords, difficulty, genre),
// laid out inline and wrapped to as many rows as fit between the logo and the
// collapse button. Lives in the header so it sits alongside the logo; the state
// it drives is owned by App, since the SongTable in main reads the same filters.
//
// The nav wraps to a variable number of rows, so its height isn't known up
// front. We measure the rendered controls and publish it as --nav-height for the
// scroll headers to sit beneath. The controls are observed (not the collapsing
// track), so the value only changes when the rows actually reflow - never on
// collapse, which would otherwise stall the collapse transitions.
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
}: TopNavTypes) => {
	const controlsRef = useRef<HTMLDivElement>(null);
	const lastHeightRef = useRef(-1);

	const measureNavHeight = useCallback(() => {
		const controls = controlsRef.current;
		if (!controls) return;

		const height = controls.offsetHeight;
		if (height === lastHeightRef.current) return;

		lastHeightRef.current = height;
		document.documentElement.style.setProperty('--nav-height', `${height}px`);
	}, []);

	// Re-measure after every render (mode toggle, label changes) and on resize.
	// The guard means --nav-height only changes when the height actually does, so
	// it stays put through a collapse and never suppresses that transition.
	useLayoutEffect(() => {
		measureNavHeight();
	});

	useEffect(() => {
		window.addEventListener('resize', measureNavHeight);
		document.fonts?.ready.then(measureNavHeight);

		return () => window.removeEventListener('resize', measureNavHeight);
	}, [measureNavHeight]);

	return (
		<div className="top-nav">
			<div className="top-nav__track">
				<div className="top-nav__controls" ref={controlsRef}>
					<Sort currentOption={currentSort} onClick={onSort} />

					<BooleanSelect
						icons={MODE_ICONS}
						label="Mode:"
						offOption="Singing"
						onOption="Guitar"
						onToggle={onToggleIsGuitarMode}
						title="Mode"
						value={isGuitarMode}
					/>

					<BooleanSelect
						icons={THEME_ICONS}
						label="Theme:"
						offOption="Light Mode"
						onOption="Dark Mode"
						onToggle={onToggleIsDarkMode}
						title="Theme"
						value={isdarkMode}
					/>

					{isGuitarMode && (
						<BooleanSelect
							label="Bar Chords:"
							offOption="Off"
							onOption="On"
							onToggle={onToggleIncludesBarChord}
							title="Bar Chords"
							value={includesBarChord}
						/>
					)}

					{isGuitarMode && (
						<Difficulty
							currentOption={currentDifficulty}
							onClick={onDifficulty}
						/>
					)}

					<Genre currentOption={currentGenre} onClick={onGenre} />
				</div>
			</div>
		</div>
	);
};

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
