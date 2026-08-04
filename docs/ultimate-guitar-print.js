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
].forEach((selector) => {
	const el = document.querySelector(selector);

	if (el) el.remove();
});

// Check Author Line
const elAuthorLine = document.querySelector('.relZm')
if (elAuthorLine && elAuthorLine.textContent.includes('Author Unregistered.')) 	elAuthorLine.remove();

// Bump Font Size
const elContent = document.querySelector('.k_vI3.KLhHx')
if (elContent) elContent.style.fontSize = '20px';

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

// Wrap section headers in spans
(() => {
	const targets = [
		'[Intro]',
		'[Outro]',
		'[Verse]',
		'[Verse 1]',
		'[Verse 2]',
		'[Verse 3]',
		'[Verse 4]',
		'[Verse 5]',
	];

	const escape = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	const re = new RegExp(targets.map(escape).join('|'), 'g');

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