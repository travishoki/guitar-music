/* To build, run: yarn build:bookmarklets */

// How long "Copied to clipboard" stays up before the banner goes back to
// advertising itself as a button.
const IDLE_TEXT = 'Click to copy';
const REVERT_DELAY = 3000;

// A fixed-position banner reporting whether the clipboard write landed, which
// doubles as a button so the copy can be re-run without reloading the page. If
// it never lands, the text rendered on the page is still there to select by
// hand. Returns the copy call alongside the element, so the caller decides when
// the first copy fires.
export const createCopyButton = (text: string) => {
	const element = document.createElement('button');
	element.textContent = 'Copying...';
	Object.assign(element.style, {
		background: '#000',
		border: 'none',
		borderRadius: '6px',
		color: '#fff',
		cursor: 'pointer',
		fontFamily: 'sans-serif',
		fontSize: '20px',
		left: '50%',
		padding: '16px 32px',
		position: 'fixed',
		top: '20px',
		// Centring on `left: 50%` alone would hang the button half a width to the
		// right of centre.
		transform: 'translateX(-50%)',
	});

	let revertTimer = 0;

	const copy = () => {
		// A click landing mid-revert would otherwise get its label overwritten by
		// the timer the previous copy left running.
		window.clearTimeout(revertTimer);
		element.textContent = 'Copying...';

		return navigator.clipboard
			.writeText(text)
			.then(() => {
				element.textContent = 'Copied to clipboard';
				revertTimer = window.setTimeout(() => {
					element.textContent = IDLE_TEXT;
				}, REVERT_DELAY);

				return true;
			})
			.catch(() => {
				// Usually means the page wasn't focused (e.g. run with DevTools
				// focused). Left up rather than reverted on a timer, since unlike the
				// success message it says what to do about it.
				element.textContent = 'Copy failed - click to retry';
			});
	};

	element.addEventListener('click', () => {
		copy();
	});

	return { copy, element };
};
