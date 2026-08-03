// Remove Elements
[
	'.Tdc9E', '.S-wLP', '.JxP4w', '.D3YWx', '.MW-Pf',
	'._66LiL', '.h7uZ6', '.NLKCx', '.n04zq', '._-27s-',
	'.Vzz2Z', '.XkJho', '._aGHQ', '.fqEMR', '.Lf02O:nth-child(2)', '.ZxtwW.ZoZpf.S7mHx.FI6Wy',
    '.UtR6x', '.eU82V.aFGkI._7YwBw'
].forEach((selector) => {
	const el = document.querySelector(selector);

	if (el) el.remove();
});


// Check Author Line
const el = document.querySelector('.relZm')
if (el && el.textContent.includes('Author Unregistered.')) 	el.remove();