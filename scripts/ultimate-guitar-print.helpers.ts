/* To build, run: yarn build:bookmarklets */

// Escape a literal so it can be dropped into a RegExp.
export const escapeRegExp = (str: string) =>
	str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Whitespace-insensitive key for comparing two headings.
export const normalize = (str: string) => str.replace(/\s+/g, ' ').trim();
