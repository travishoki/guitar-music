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

// Trim leading/trailing blanks, then collapse runs of blank lines down to one.
while (lines.length && lines[0] === '') lines.shift();
while (lines.length && lines[lines.length - 1] === '') lines.pop();
const body = lines.filter((line, i) => line !== '' || lines[i - 1] !== '');

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
