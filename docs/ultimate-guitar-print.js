// Only keep the body
const mainContent = '.LLGvZ.BqjAv'
const keep = document.querySelector(mainContent);
if (keep) document.body.replaceChildren(keep.cloneNode(true));

// Remove Elements
[
    '.JxP4w', // Floating Right Controls
    '.Vzz2Z', // Floating Right Controls
    '._66LiL', // Comments Section
	'.NLKCx', // Top Section Menu
    '.n04zq', // UGC
    '._-27s-', // Song Modification Menu
    '.XkJho', // Bottom Controls
    '._aGHQ', // Song Stats
    '.fqEMR', // Pin Button
    '.Lf02O:nth-child(2)', // Author Line Contrubutors
    '.eU82V', // Instrument Menu
    '.ZoZpf', // Play Strum Button
    '.fqEMR', // Strum Edit Button
].forEach((selector) => {
	const el = document.querySelector(selector);

	if (el) el.remove();
});

// Check Author Line
const elAuthorLine = document.querySelector('.relZm')
if (elAuthorLine && elAuthorLine.textContent.includes('Author Unregistered.')) 	elAuthorLine.remove();

// Bump Font Size
const elContent = document.querySelector('.Y9v5o')
if (elContent) {
    elContent.style.clear = 'both';
    elContent.style.display = 'block';
    elContent.style.paddingTop = '0';
}

// Inner wrapper has inline font-size that overrides the parent
const elInnerContent = document.querySelector('.k_vI3.KLhHx');
if (elInnerContent) elInnerContent.style.fontSize = '18px';

// Remove all canvas elements inside each RZayQ
document.querySelectorAll('.RZayQ').forEach((rzayq) => {
	rzayq.querySelectorAll('canvas').forEach((canvas) => canvas.remove());
});

// Cleanup Chords Section
document.querySelectorAll('.RZayQ').forEach((el) => el.remove());
document.querySelectorAll('.FlgDy.pvu2n').forEach((el) => {
    el.style.width = '80px';
});
const elChordSection = document.querySelector('.lnasI')
if (elChordSection) elChordSection.style.paddingRight = '0';

// Section headings, shared by the wrap + de-dupe steps below.
const sectionHeadings = [
	'[Intro]',
	'[Outro]',
	'[Verse]',
	'[Chorus]',
    '[Pre-Chorus]',
	'[Bridge]',
	'[Verse 1]',
	'[Verse 2]',
	'[Verse 3]',
	'[Verse 4]',
	'[Verse 5]',
];

// Wrap section headers in spans
(() => {
	const escape = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	const re = new RegExp(sectionHeadings.map(escape).join('|'), 'g');

	// Collect matching text nodes first, since wrapping mutates the tree.
	const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
	const nodes = [];
	let node;
	while ((node = walker.nextNode())) {
		re.lastIndex = 0;
		if (re.test(node.nodeValue)) nodes.push(node);
	}

	nodes.forEach((textNode) => {
		const text = textNode.nodeValue;
		const frag = document.createDocumentFragment();
		let last = 0;
		let match;
		re.lastIndex = 0;

		while ((match = re.exec(text))) {
			if (match.index > last) {
				frag.appendChild(document.createTextNode(text.slice(last, match.index)));
			}

			const span = document.createElement('span');
			span.style.marginTop = '0';
			span.style.display = 'inline-block';
			span.textContent = match[0];
			frag.appendChild(span);

			last = match.index + match[0].length;
		}

		if (last < text.length) {
			frag.appendChild(document.createTextNode(text.slice(last)));
		}

		textNode.parentNode.replaceChild(frag, textNode);
	});
})();

// Collapse repeated sections: keep the heading, drop content that already appeared
(() => {
	// Key sections by their heading only, so EVERY repeat of a heading (e.g.
	// [Chorus]) collapses - even if a later one has a minor content difference.
	const normalize = (str) => str.replace(/\s+/g, ' ').trim();

	const dedupe = (container) => {
		if (!container) return;

		// Heading spans at ANY depth, in document order.
		const headings = Array.from(container.querySelectorAll('span')).filter((el) =>
			sectionHeadings.includes(el.textContent.trim()),
		);
		if (headings.length === 0) return;

		const seen = new Set();
		headings.forEach((heading, i) => {
			const next = headings[i + 1];

			// The section body = everything between this heading and the next one.
			const range = document.createRange();
			range.setStartAfter(heading);
			if (next) {
				range.setEndBefore(next);
			} else {
				range.setEndAfter(container.lastChild);
			}

			const key = normalize(heading.textContent);

			if (seen.has(key)) {
				range.deleteContents();
				const label = heading.textContent.trim().replace(/^\[|\]$/g, '');
				heading.after(document.createTextNode(`\n    Repeat ${label} Above\n\n`));
			} else {
				seen.add(key);
			}
		});
	};

	dedupe(document.querySelector('.k_vI3.KLhHx'));
	dedupe(document.querySelector('.Y9v5o'));
})();

// Drop the strumming section when there's no pattern for this song
(() => {
	const NO_PATTERN = 'There is no strumming pattern for this song yet.';
	document.querySelectorAll('.S6KHd').forEach((el) => {
		if (el.textContent.includes(NO_PATTERN)) {
			el.closest('._5giwr.LyFB-')?.remove();
		}
	});
})();

// Put the two _5giwr sections side by side, 50% each
(() => {
	const sections = document.querySelectorAll('._5giwr');
	if (sections.length < 2) return;

	const [first, second] = sections;
	const parent = first.parentNode;

	const row = document.createElement('div');
	row.style.display = 'flex';
	row.style.alignItems = 'flex-start';
	row.style.width = '100%';

	// Drop the row where the first section is, then move both sections into it.
	parent.insertBefore(row, first);
	[first, second].forEach((section) => {
		section.style.width = '50%';
		section.style.boxSizing = 'border-box';
		row.appendChild(section);
	});

	// If the parent is itself a flex container, the row would sit *beside* the
	// following content (e.g. .Y9v5o) instead of above it. Force it to block so
	// the two-column row and everything after it stack vertically.
	parent.style.display = 'block';
})();

// Put the strumming-pattern articles side by side, 50% each
(() => {
	// The two <article class="mXLvx"> already share a <section class="_61oxx">
	// parent, so just make that parent a flex row and size each article to half.
	const container = document.querySelector('._61oxx');
	if (!container) return;

	container.style.display = 'flex';
	container.style.alignItems = 'flex-start';
	container.style.width = '100%';

	container.querySelectorAll('.mXLvx').forEach((article) => {
		article.style.flex = '1';
		article.style.width = '50%';
		article.style.boxSizing = 'border-box';
	});
})();