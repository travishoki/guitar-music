/*
To build:
run yarn build:bookmarklets
*/

import { UG } from './const';
import { getSongTitle } from './helpers';
import {
	CHORD_MARK,
	CHORD_RESIDUE,
	HEADER_LINE,
	TRAILING_NOISE,
} from './ultimate-guitar-lyrics.const';
import {
	hasContent,
	isHeading,
	isTabLine,
	quote,
	tidy,
	toVariableName,
} from './ultimate-guitar-lyrics.helpers';

// The <h1> disappears with the rest of the page, so read the title first.
const varName = toVariableName(getSongTitle());

// Flatten the tab to one string per line.
const lines: string[] = [];
const tab = document.querySelector(UG.tab);

if (tab) {
	const clone = tab.cloneNode(true) as Element;
	clone.querySelectorAll(UG.notes).forEach((el) => {
		el.textContent = CHORD_MARK;
	});

	(clone.textContent ?? '').split('\n').forEach((raw) => {
		// Chord alignment leaves runs of spaces mid-line ("where we     go").
		const text = raw.split(CHORD_MARK).join('').replace(/\s+/g, ' ').trim();
		if (raw.includes(CHORD_MARK) && CHORD_RESIDUE.test(text)) return;
		if (isTabLine(text)) return;
		lines.push(text);
	});
}

// Drop the leading "Label: value" header block along with any blanks around it.
while (lines.length && (lines[0] === '' || HEADER_LINE.test(lines[0])))
	lines.shift();

// Trim trailing blanks, plus the stray "X" UG leaves at the end of the tab.
while (
	lines.length &&
	(lines[lines.length - 1] === '' ||
		TRAILING_NOISE.test(lines[lines.length - 1]))
) {
	lines.pop();
}

// A section whose content was nothing but chords is left as a lone heading
// (e.g. "[Intro]"), so drop those.
const body = tidy(
	tidy(lines)
		.filter((line, i, list) => !isHeading(line) || hasContent(list, i))
		// Close up a blank line sitting between a heading and its first line.
		.filter((line, i, list) => line !== '' || !isHeading(list[i - 1])),
);

const code = [
	`const ${varName} = [`,
	...body.map((line) => `\t${quote(line)},`),
	'];',
	'',
	`export default ${varName};`,
	// Trailing blank so the pasted file ends in a line break, as ESLint wants.
	'',
].join('\n');

// Render it as source, ready to copy into src/components/lyrics.
const pre = document.createElement('pre');
pre.textContent = code;
Object.assign(pre.style, {
	background: '#fff',
	color: '#000',
	fontFamily: "'Roboto Mono', 'Courier New', monospace",
	fontSize: '14px',
	lineHeight: '1.5',
	margin: '0',
	padding: '20px',
	tabSize: '4',
	whiteSpace: 'pre',
});

// Status banner for the copy below, which reports whether the clipboard write
// landed - if it didn't, the rendered text is still there to select by hand.
const status = document.createElement('div');
status.textContent = 'Copying...';
Object.assign(status.style, {
	background: '#000',
	borderRadius: '4px',
	color: '#fff',
	fontFamily: 'sans-serif',
	fontSize: '14px',
	padding: '8px 16px',
	position: 'fixed',
	right: '20px',
	top: '20px',
});

document.body.style.background = '#fff';
document.body.style.margin = '0';
document.body.replaceChildren(pre, status);

// Copy on run. Hand-selecting the text drops the final newline, because
// browsers leave a <pre>'s trailing line break out of the selection.
navigator.clipboard
	.writeText(code)
	.then(() => {
		status.textContent = 'Copied to clipboard';
		return true;
	})
	.catch(() => {
		// Usually means the page wasn't focused (e.g. run with DevTools focused).
		status.textContent = 'Copy failed - click the page and re-run';
	});
