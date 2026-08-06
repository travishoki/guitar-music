import { getSongTitle } from './helpers';

// getSongTitle only reads document.querySelector('h1')?.textContent, so a stub
// is enough - no need for a jsdom test environment.
const setHeading = (textContent: string | null) => {
	(globalThis as unknown as { document: unknown }).document = {
		querySelector: () => (textContent === null ? null : { textContent }),
	};
};

describe('getSongTitle', () => {
	afterEach(() => {
		delete (globalThis as unknown as { document?: unknown }).document;
	});

	test('should strip the "Chords" suffix', () => {
		setHeading('Back Home Chords');

		expect(getSongTitle()).toEqual('Back Home');
	});

	test('should keep the artist', () => {
		setHeading('Back Home Chords by Andy Grammer');

		expect(getSongTitle()).toEqual('Back Home by Andy Grammer');
	});

	test('should match "chords" regardless of case', () => {
		setHeading('BACK HOME CHORDS');

		expect(getSongTitle()).toEqual('BACK HOME');
	});

	test('should only take the first line', () => {
		setHeading('Back Home Chords\n12,345 views');

		expect(getSongTitle()).toEqual('Back Home');
	});

	test('should trim surrounding whitespace', () => {
		setHeading('   Back Home Chords   ');

		expect(getSongTitle()).toEqual('Back Home');
	});

	test('should leave a title with no "chords" in it alone', () => {
		setHeading('Back Home');

		expect(getSongTitle()).toEqual('Back Home');
	});

	test('should return an empty string when there is no heading', () => {
		setHeading(null);

		expect(getSongTitle()).toEqual('');
	});
});
