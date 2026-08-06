/* To build, run: yarn build:bookmarklets */

import { sectionHeadings } from './ultimate-guitar-print.const';

// Escape a literal so it can be dropped into a RegExp.
export const escapeRegExp = (str: string) =>
	str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Whitespace-insensitive key for comparing two headings.
export const normalize = (str: string) => str.replace(/\s+/g, ' ').trim();

// The literal list, plus any numbered verse - verses get numbered on the fly,
// so the list can't name them all up front.
export const isSectionHeading = (text: string) =>
	sectionHeadings.includes(text) || /^\[verse \d+\]$/i.test(text);
