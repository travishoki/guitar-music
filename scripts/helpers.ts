/* To build, run: yarn build:bookmarklets */

// "Back Home Chords by Andy Grammer" -> "Back Home by Andy Grammer". Both
// scripts read the <h1> before replacing the body, and neither wants the
// "chords" suffix.
export const getSongTitle = (): string =>
	document
		.querySelector('h1')
		?.textContent?.split('\n')[0]
		.trim()
		.replace(/\s*\bchords\b\s*/i, ' ')
		.trim() ?? '';

// "[Verse]" + 2 -> "[Verse 2]", keeping whatever casing the tab used.
export const numberVerseHeading = (heading: string, position: number) =>
	heading.replace(/\]$/, ` ${position}]`);
