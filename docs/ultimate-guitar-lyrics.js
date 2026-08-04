// Every Ultimate Guitar class name lives here, so a site-side rename only has
// to be fixed in one place.
const UG = {
	// Page structure
	tab: '.k_vI3.KLhHx',

    // Tabs
    notes: '.eSJpP',
}

// Only keep the tab content
const tab = document.querySelector(UG.tab);
if (tab) document.body.replaceChildren(tab.cloneNode(true));

// Remove Elements
[
	UG.notes,
].forEach((selector) => {
	document.querySelectorAll(selector).forEach((el) => el.remove());
});