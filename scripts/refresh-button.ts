/* To build, run: yarn build:bookmarklets */

import { BANNER_BUTTON_STYLE } from './banner-button.const';

// A fixed-position banner sitting just under the copy button that reloads the
// page, for re-running the bookmarklet after tweaking the source tab.
export const createRefreshButton = () => {
	const element = document.createElement('button');
	element.textContent = 'Refresh Page';
	Object.assign(element.style, BANNER_BUTTON_STYLE, {
		// Clears the copy button above it (top: 20px plus its height).
		top: '92px',
	});

	element.addEventListener('click', () => {
		window.location.reload();
	});

	return { element };
};
