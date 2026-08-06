import { CAPO_LINE, CHORD_RESIDUE } from './ultimate-guitar-lyrics.const';

// What CHORD_RESIDUE is tested against is a chord line with the chord NAMES
// already stripped out - so "(A) (D)" arrives as "() ()".
describe('CHORD_RESIDUE', () => {
	test('should match a line left empty by stripping its chords', () => {
		expect(CHORD_RESIDUE.test('')).toEqual(true);
		expect(CHORD_RESIDUE.test('     ')).toEqual(true);
	});

	test('should match leftover strum markers', () => {
		expect(CHORD_RESIDUE.test('*     *')).toEqual(true);
	});

	test('should match leftover playing notes', () => {
		expect(CHORD_RESIDUE.test('-once')).toEqual(true);
		expect(CHORD_RESIDUE.test('*       -stop')).toEqual(true);
	});

	test('should match the brackets left by a parenthesised chord', () => {
		expect(CHORD_RESIDUE.test('()')).toEqual(true);
		expect(CHORD_RESIDUE.test('( )')).toEqual(true);
		expect(CHORD_RESIDUE.test('()   ()')).toEqual(true);
	});

	test('should match brackets alongside markers and notes', () => {
		expect(CHORD_RESIDUE.test('()*  () -once')).toEqual(true);
	});

	test('should not match a lyric line', () => {
		expect(CHORD_RESIDUE.test('And no matter where we go')).toEqual(false);
	});

	test('should not match a lyric that merely contains brackets', () => {
		expect(CHORD_RESIDUE.test('We beat to the same drum (Hey!)')).toEqual(
			false,
		);
	});

	test('should not match a section heading', () => {
		expect(CHORD_RESIDUE.test('[Chorus]')).toEqual(false);
	});
});

describe('CAPO_LINE', () => {
	test('should match a capo note on its own line', () => {
		expect(CAPO_LINE.test('Capo 1')).toEqual(true);
	});

	test('should not match a lyric that merely mentions a capo', () => {
		expect(CAPO_LINE.test('I put a capo on 2')).toEqual(false);
	});
});
