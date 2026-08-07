import { ALL } from './filters';

export enum DIFFICULTY {
	ABSOLUTE_BEGINNER = 'Absolute Beginner',
	ADVANCED = 'Advanced',
	BEGINNER = 'Beginner',
	INTERMEDIATE = 'Intermediate',
}

// Temperature ramp from easiest (coolest, blue) to hardest (hottest, red).
export const DIFFICULTY_COLORS: Record<DIFFICULTY, string> = {
	[DIFFICULTY.ABSOLUTE_BEGINNER]: '#2563eb', // blue
	[DIFFICULTY.BEGINNER]: '#16a34a', // green
	[DIFFICULTY.INTERMEDIATE]: '#ea580c', // orange
	[DIFFICULTY.ADVANCED]: '#dc2626', // red
};

// Easiest to hardest - the order the legend lists them in (the enum itself is
// alphabetical).
export const DIFFICULTY_ORDER = [
	DIFFICULTY.ABSOLUTE_BEGINNER,
	DIFFICULTY.BEGINNER,
	DIFFICULTY.INTERMEDIATE,
	DIFFICULTY.ADVANCED,
];

// Options for the difficulty filter at the top of the home page - "All" plus
// each difficulty from easiest to hardest.
export const DIFFICULTY_FILTER_LIST = [ALL, ...DIFFICULTY_ORDER];
