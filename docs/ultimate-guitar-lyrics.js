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
// ALREADY blank survives as a real section break.
const CHORD_MARK = '\u0000';

// The <h1> disappears with the rest of the page, so read the title first.
const songTitle = document.querySelector('h1')?.textContent.split('\n')[0].trim() ?? '';

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

// Flatten the tab to one string per line.
const lines = [];
const tab = document.querySelector(UG.tab);

if (tab) {
	const clone = tab.cloneNode(true);
	clone.querySelectorAll(UG.notes).forEach((el) => {
		el.textContent = CHORD_MARK;
	});

	clone.textContent.split('\n').forEach((raw) => {
		const text = raw.split(CHORD_MARK).join('').trim();
		if (text === '' && raw.includes(CHORD_MARK)) return;
		lines.push(text);
	});
}

// Some tabs open with an "Artist: / Title: / Album:" header block. Drop those
// leading "Label: value" lines along with any blanks around them. Section
// headings start with "[", so they can't be swallowed by this.
const HEADER_LINE = /^[A-Za-z][A-Za-z ]{0,20}:\s*\S/;
while (lines.length && (lines[0] === '' || HEADER_LINE.test(lines[0]))) lines.shift();

// Trim trailing blanks, plus the stray "X" (a close button) UG leaves behind at
// the end of the tab.
const TRAILING_NOISE = /^[Xx]$/;
while (
	lines.length &&
	(lines[lines.length - 1] === '' || TRAILING_NOISE.test(lines[lines.length - 1]))
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

document.body.style.background = '#fff';
document.body.style.margin = '0';
document.body.replaceChildren(pre);
