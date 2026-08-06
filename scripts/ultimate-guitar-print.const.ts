/*
To build:
run yarn build:bookmarklets
*/

export const FONT_SIZE = '16px';

// 8.5 x 11 inch at 96 CSS px/in, with a 0.5in inner margin.
export const PAGE_W = 8.5 * 96;
export const PAGE_H = 11 * 96;
export const PAD = 0.5 * 96;

// Section headings, shared by the wrap + de-dupe steps.
export const sectionHeadings = [
	'[Intro]',
	'[Outro]',
	'[Verse]',
	'[Chorus]',
	'[Pre Chorus]',
	'[Pre-Chorus]',
	'[Final Chorus]',
	'[Final-Chorus]',
	'[Bridge]',
	'[Verse 1]',
	'[Verse 2]',
	'[Verse 3]',
	'[Verse 4]',
	'[Verse 5]',
];

// Marks a strumming section that has nothing in it worth printing.
export const NO_PATTERN = 'There is no strumming pattern for this song yet.';
