import {
	hasContent,
	isHeading,
	isTabLine,
	numberVerses,
	quote,
	tidy,
	toVariableName,
} from './ultimate-guitar-lyrics.helpers';

describe('isTabLine', () => {
	test('should match a stave labelled with its string name', () => {
		expect(isTabLine('e|-10----------10----------|')).toEqual(true);
		expect(isTabLine('G|----12----12----12----12-|  x4')).toEqual(true);
	});

	test('should match an unlabelled stave', () => {
		expect(isTabLine('|-----5-7-----7-|8-----8-2-----2-|')).toEqual(true);
	});

	test('should not match a lyric line', () => {
		expect(isTabLine('And no matter where we go')).toEqual(false);
	});

	test('should not match a lyric that happens to start with a note letter', () => {
		expect(isTabLine('Baby beluga in the deep blue sea')).toEqual(false);
	});

	test('should not match a pipe with too few dashes to be a stave', () => {
		expect(isTabLine('one | two')).toEqual(false);
	});

	test('should not match a section heading', () => {
		expect(isTabLine('[Intro]')).toEqual(false);
	});
});

describe('tidy', () => {
	test('should collapse a run of blank lines down to one', () => {
		expect(tidy(['a', '', '', '', 'b'])).toEqual(['a', '', 'b']);
	});

	test('should drop leading and trailing blank lines', () => {
		expect(tidy(['', '', 'a', 'b', '', ''])).toEqual(['a', 'b']);
	});

	test('should leave a tidy list alone', () => {
		expect(tidy(['a', '', 'b'])).toEqual(['a', '', 'b']);
	});

	test('should return an empty list for all blanks', () => {
		expect(tidy(['', '', ''])).toEqual([]);
	});

	test('should not mutate the list it was given', () => {
		const list = ['', 'a', '', '', 'b', ''];
		tidy(list);

		expect(list).toEqual(['', 'a', '', '', 'b', '']);
	});
});

describe('isHeading', () => {
	test('should match a bracketed section label', () => {
		expect(isHeading('[Chorus]')).toEqual(true);
		expect(isHeading('[Verse 1]')).toEqual(true);
	});

	test('should not match a lyric line', () => {
		expect(isHeading('Chorus')).toEqual(false);
		expect(isHeading('She said [something] to me')).toEqual(false);
	});

	test('should not match a blank line', () => {
		expect(isHeading('')).toEqual(false);
	});
});

describe('hasContent', () => {
	test('should find a lyric between the heading and the next one', () => {
		const list = ['[Verse 1]', 'a lyric', '', '[Chorus]'];

		expect(hasContent(list, 0)).toEqual(true);
	});

	test('should look past a blank line under the heading', () => {
		const list = ['[Verse 1]', '', 'a lyric'];

		expect(hasContent(list, 0)).toEqual(true);
	});

	test('should report a heading followed only by blanks as empty', () => {
		const list = ['[Intro]', '', '[Verse 1]', 'a lyric'];

		expect(hasContent(list, 0)).toEqual(false);
	});

	test('should report back-to-back headings as empty', () => {
		const list = ['[Intro]', '[Verse 1]', 'a lyric'];

		expect(hasContent(list, 0)).toEqual(false);
	});

	test('should report a heading at the end of the list as empty', () => {
		const list = ['[Verse 1]', 'a lyric', '', '[Outro]'];

		expect(hasContent(list, 3)).toEqual(false);
	});
});

describe('quote', () => {
	test('should use single quotes by default', () => {
		expect(quote('Baby beluga')).toEqual("'Baby beluga'");
	});

	test('should use double quotes when the line has an apostrophe', () => {
		expect(quote("She's daddy's little girl")).toEqual(
			'"She\'s daddy\'s little girl"',
		);
	});

	test('should use single quotes when the line has double quotes', () => {
		expect(quote('He said, "How do you do?"')).toEqual(
			'\'He said, "How do you do?"\'',
		);
	});

	test('should pick whichever quote needs fewer escapes', () => {
		// One apostrophe, two double quotes - single quoting escapes less.
		expect(quote('They\'re singing, "I love you."')).toEqual(
			"'They\\'re singing, \"I love you.\"'",
		);
	});

	test('should escape backslashes', () => {
		expect(quote('back\\slash')).toEqual("'back\\\\slash'");
	});

	test('should handle an empty line', () => {
		expect(quote('')).toEqual("''");
	});
});

describe('toVariableName', () => {
	test('should PascalCase the title', () => {
		expect(toVariableName('Baby Beluga')).toEqual('BabyBeluga');
	});

	test('should drop the artist', () => {
		expect(toVariableName('Back Home by Andy Grammer')).toEqual('BackHome');
	});

	test('should lower-case an all-caps title before capitalising', () => {
		expect(toVariableName('BABY BELUGA')).toEqual('BabyBeluga');
	});

	test('should keep acronyms in a mixed-case title', () => {
		expect(toVariableName('God Bless The USA')).toEqual('GodBlessTheUSA');
	});

	test('should strip punctuation', () => {
		expect(toVariableName("You're Still The One")).toEqual('YoureStillTheOne');
	});

	test('should fall back to "Lyrics" for an empty title', () => {
		expect(toVariableName('')).toEqual('Lyrics');
	});

	test('should fall back to "Lyrics" when nothing usable is left', () => {
		expect(toVariableName('!!!')).toEqual('Lyrics');
	});
});

describe('numberVerses', () => {
	test('should number the verses when there is more than one', () => {
		const list = ['[Verse]', 'a', '[Chorus]', 'b', '[Verse]', 'c'];

		expect(numberVerses(list)).toEqual([
			'[Verse 1]',
			'a',
			'[Chorus]',
			'b',
			'[Verse 2]',
			'c',
		]);
	});

	test('should leave a lone verse bare', () => {
		expect(numberVerses(['[Verse]', 'a'])).toEqual(['[Verse]', 'a']);
	});
});
