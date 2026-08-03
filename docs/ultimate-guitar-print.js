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
    el.style.padding = '0px';
});
const elChordSection = document.querySelector('.lnasI')
if (elChordSection) elChordSection.style.removeProperty('padding-right');