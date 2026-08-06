/* To build, run: yarn build:bookmarklets */

// Chord spans get marked instead of removed, so that once the tab is flattened
// to text a chord-only line can be dropped outright while a line that was
// ALREADY blank survives as a real section break. Only the chord NAME lives in
// the span though - the strum marker ("Cadd9*") and any playing note
// ("C -once", "G -stop") sit outside it as plain text - as do the brackets
// around an optional chord ("(A)") - so a chord line comes back not as empty
// but as that leftover residue.
export const CHORD_MARK = '\u0000';
export const CHORD_RESIDUE = /^[\s*()]*(?:-[a-z]+[\s*()]*)*$/i;

// Some tabs open with an "Artist: / Title: / Album:" header block. Section
// headings start with "[", so they can't be swallowed by this.
export const HEADER_LINE = /^[A-Za-z][A-Za-z ]{0,20}:\s*\S/;

// A capo note on a line of its own ("Capo 1", "Capo II", "CAPO ON 4",
// "Capo 3rd fret"). It's playing instruction, not a lyric.
export const CAPO_LINE =
	/^capo\b[\s:]*(?:on\s+)?(?:\d+(?:st|nd|rd|th)?|[ivx]+)?(?:\s*fret)?$/i;

// A row of bar lines, which is what a "| G | C | D |" chord chart leaves once
// the chord names inside it have been stripped out.
export const BAR_LINE = /^[|\s]+$/;

// The stray "X" (a close button) UG leaves behind at the end of the tab.
export const TRAILING_NOISE = /^[Xx]$/;
