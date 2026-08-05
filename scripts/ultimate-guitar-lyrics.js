// Every Ultimate Guitar class name lives here, so a site-side rename only has
// to be fixed in one place.
const UG = {
	// Page structure
	tab: '.k_vI3.KLhHx',

	// Tabs
	notes: '.eSJpP',
};

// Chord spans get marked instead of removed, so that once the tab is flattened
// to text a chord-only line can be dropped outright while a line that was
// ALREADY blank survives as a real section break. Only the chord NAME lives in
// the span though - the strum marker ("Cadd9*") and any playing note
// ("C -once", "G -stop") sit outside it as plain text, so a chord line comes
// back not as empty but as that leftover residue.
const CHORD_MARK = '\u0000';
const CHORD_RESIDUE = /^[\s*]*(?:-[a-z]+[\s*]*)*$/i;

// The <h1> disappears with the rest of the page, so read the title first.
const songTitle =
	document.querySelector('h1')?.textContent.split('\n')[0].trim() ?? '';

// "Baby Beluga Chords by Raffi" -> "BabyBeluga". An all-caps heading gets
// lower-cased first; a mixed-case one keeps its word interiors so acronyms
// (e.g. "God Bless The USA") survive.
const varName =
	(/[a-z]/.test(songTitle) ? songTitle : songTitle.toLowerCase())
		.replace(/\s+by\s+.*$/i, '')
		.replace(/\s*\bchords\b\s*/i, ' ')
		.replace(/[^a-zA-Z0-9 ]/g, '')
		.trim()
		.split(/\s+/)
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join('') || 'Lyrics';

// Tab staves ("e|-10----------10----------|") are notation, not lyrics. Matched
// either by the leading string name or by being dash-dominant, so an unlabelled
// stave still counts.
const isTabLine = (line) =>
	/^[eEaAdDgGbB][#b]?\s*\|/.test(line) ||
	(line.includes('|') && (line.match(/-/g) || []).length >= 4);

// Flatten the tab to one string per line.
const lines = [];
const tab = document.querySelector(UG.tab);

if (tab) {
	const clone = tab.cloneNode(true);
	clone.querySelectorAll(UG.notes).forEach((el) => {
		el.textContent = CHORD_MARK;
	});

	clone.textContent.split('\n').forEach((raw) => {
		// Chord alignment leaves runs of spaces mid-line ("where we     go").
		const text = raw.split(CHORD_MARK).join('').replace(/\s+/g, ' ').trim();
		if (raw.includes(CHORD_MARK) && CHORD_RESIDUE.test(text)) return;
		if (isTabLine(text)) return;
		lines.push(text);
	});
}

// Some tabs open with an "Artist: / Title: / Album:" header block. Drop those
// leading "Label: value" lines along with any blanks around them. Section
// headings start with "[", so they can't be swallowed by this.
const HEADER_LINE = /^[A-Za-z][A-Za-z ]{0,20}:\s*\S/;
while (lines.length && (lines[0] === '' || HEADER_LINE.test(lines[0])))
	lines.shift();

// Trim trailing blanks, plus the stray "X" (a close button) UG leaves behind at
// the end of the tab.
const TRAILING_NOISE = /^[Xx]$/;
while (
	lines.length &&
	(lines[lines.length - 1] === '' ||
		TRAILING_NOISE.test(lines[lines.length - 1]))
) {
	lines.pop();
}

// Collapse runs of blank lines down to one, with no blanks on either end.
const tidy = (list) => {
	const out = list.filter((line, i) => line !== '' || list[i - 1] !== '');
	while (out.length && out[0] === '') out.shift();
	while (out.length && out[out.length - 1] === '') out.pop();
	return out;
};

// A section whose content was nothing but chords is left as a lone heading
// (e.g. "[Intro]"). "Empty" means nothing but blanks between it and the next
// heading - checking only the following line would delete every heading in a
// tab that puts a blank line under its section labels.
const isHeading = (line) => /^\[.*\]$/.test(line);
const hasContent = (list, start) => {
	for (let i = start + 1; i < list.length; i += 1) {
		if (isHeading(list[i])) return false;
		if (list[i] !== '') return true;
	}
	return false;
};

const body = tidy(
	tidy(lines)
		.filter((line, i, list) => !isHeading(line) || hasContent(list, i))
		// Close up a blank line sitting between a heading and its first line.
		.filter((line, i, list) => line !== '' || !isHeading(list[i - 1])),
);

// Match Prettier's singleQuote rule: whichever quote needs fewer escapes.
const quote = (str) => {
	const escaped = str.replace(/\\/g, '\\\\');
	const singles = (str.match(/'/g) || []).length;
	const doubles = (str.match(/"/g) || []).length;
	if (singles > doubles) return `"${escaped.replace(/"/g, '\\"')}"`;
	return `'${escaped.replace(/'/g, "\\'")}'`;
};

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
