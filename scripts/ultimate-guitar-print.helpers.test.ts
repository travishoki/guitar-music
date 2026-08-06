import { escapeRegExp, normalize } from './ultimate-guitar-print.helpers';

describe('escapeRegExp', () => {
	test('should escape the brackets around a section heading', () => {
		expect(escapeRegExp('[Chorus]')).toEqual('\\[Chorus\\]');
	});

	test('should produce a pattern that matches the literal', () => {
		const re = new RegExp(escapeRegExp('[Verse 1]'));

		expect(re.test('[Verse 1]')).toEqual(true);
		expect(re.test('Verse 1')).toEqual(false);
	});

	test('should escape every regex metacharacter', () => {
		expect(escapeRegExp('.*+?^${}()|[]\\')).toEqual(
			'\\.\\*\\+\\?\\^\\$\\{\\}\\(\\)\\|\\[\\]\\\\',
		);
	});

	test('should leave a plain string alone', () => {
		expect(escapeRegExp('Chorus')).toEqual('Chorus');
	});

	test('should handle an empty string', () => {
		expect(escapeRegExp('')).toEqual('');
	});
});

describe('normalize', () => {
	test('should collapse runs of whitespace', () => {
		expect(normalize('where we     go')).toEqual('where we go');
	});

	test('should trim surrounding whitespace', () => {
		expect(normalize('  [Chorus]  ')).toEqual('[Chorus]');
	});

	test('should collapse newlines and tabs too', () => {
		expect(normalize('a\n\tb')).toEqual('a b');
	});

	test('should leave an already-normalized string alone', () => {
		expect(normalize('[Chorus]')).toEqual('[Chorus]');
	});

	test('should reduce an all-whitespace string to empty', () => {
		expect(normalize('   ')).toEqual('');
	});
});
