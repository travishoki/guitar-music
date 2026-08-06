// To build, run: yarn build:bookmarklets

// Chord spans get marked instead of removed, so that once the tab is flattened
// to text a chord-only line can be dropped outright while a line that was
// ALREADY blank survives as a real section break. Only the chord NAME lives in
// the span though - the strum marker ("Cadd9*") and any playing note
// ("C -once", "G -stop") sit outside it as plain text, so a chord line comes
// back not as empty but as that leftover residue.
export const CHORD_MARK = '\u0000';
export const CHORD_RESIDUE = /^[\s*]*(?:-[a-z]+[\s*]*)*$/i;

// Some tabs open with an "Artist: / Title: / Album:" header block. Section
// headings start with "[", so they can't be swallowed by this.
export const HEADER_LINE = /^[A-Za-z][A-Za-z ]{0,20}:\s*\S/;

// The stray "X" (a close button) UG leaves behind at the end of the tab.
export const TRAILING_NOISE = /^[Xx]$/;
