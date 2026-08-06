/* To build, run: yarn build:bookmarklets */

import { VERSE_HEADING } from './const';
import { numberVerseHeading } from './helpers';

// Tab staves ("e|-10----------10----------|") are notation, not lyrics. Matched
// either by the leading string name or by being dash-dominant, so an unlabelled
// stave still counts.
export const isTabLine = (line: string) =>
	/^[eEaAdDgGbB][#b]?\s*\|/.test(line) ||
	(line.includes('|') && (line.match(/-/g) || []).length >= 4);

// Collapse runs of blank lines down to one, with no blanks on either end.
export const tidy = (list: string[]) => {
	const out = list.filter((line, i) => line !== '' || list[i - 1] !== '');
	while (out.length && out[0] === '') out.shift();
	while (out.length && out[out.length - 1] === '') out.pop();
	return out;
};

export const isHeading = (line: string) => /^\[.*\]$/.test(line);

// "Empty" means nothing but blanks between this heading and the next one -
// checking only the following line would report every heading in a tab that
// puts a blank line under its section labels as empty.
export const hasContent = (list: string[], start: number) => {
	for (let i = start + 1; i < list.length; i += 1) {
		if (isHeading(list[i])) return false;
		if (list[i] !== '') return true;
	}
	return false;
};

// Match Prettier's singleQuote rule: whichever quote needs fewer escapes.
export const quote = (str: string) => {
	const escaped = str.replace(/\\/g, '\\\\');
	const singles = (str.match(/'/g) || []).length;
	const doubles = (str.match(/"/g) || []).length;
	if (singles > doubles) return `"${escaped.replace(/"/g, '\\"')}"`;
	return `'${escaped.replace(/'/g, "\\'")}'`;
};

// "Baby Beluga by Raffi" -> "BabyBeluga". An all-caps heading gets lower-cased
// first; a mixed-case one keeps its word interiors so acronyms (e.g. "God Bless
// The USA") survive.
export const toVariableName = (title: string) =>
	(/[a-z]/.test(title) ? title : title.toLowerCase())
		.replace(/\s+by\s+.*$/i, '')
		.replace(/[^a-zA-Z0-9 ]/g, '')
		.trim()
		.split(/\s+/)
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join('') || 'Lyrics';

// Tabs that split a song into several unnumbered "[Verse]" sections read better
// as "[Verse 1]", "[Verse 2]", ... A lone verse is left alone.
export const numberVerses = (list: string[]) => {
	const isBareVerse = (line: string) => VERSE_HEADING.test(line);
	if (list.filter(isBareVerse).length < 2) return list;

	let position = 0;
	return list.map((line) => {
		if (!isBareVerse(line)) return line;
		position += 1;
		return numberVerseHeading(line, position);
	});
};
