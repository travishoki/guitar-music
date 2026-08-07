/* To build, run: yarn build:bookmarklets */

// Shared look for the fixed-position banner buttons the lyrics bookmarklet
// stacks at the top of the page. The width is fixed and wide enough for the
// longest label any of them shows ("Copy failed - click to retry") so the copy
// button doesn't resize as its text changes and both buttons match.
export const BANNER_BUTTON_STYLE: Partial<CSSStyleDeclaration> = {
	background: '#000',
	border: 'none',
	borderRadius: '6px',
	boxSizing: 'border-box',
	color: '#fff',
	cursor: 'pointer',
	fontFamily: 'sans-serif',
	fontSize: '20px',
	left: '50%',
	padding: '16px 32px',
	position: 'fixed',
	textAlign: 'center',
	// Centring on `left: 50%` alone would hang the button half a width to the
	// right of centre.
	transform: 'translateX(-50%)',
	width: '400px',
};
