import { fixUrlTitle } from './helpers';

describe('fixUrlTitle', () => {
	test('should return formatted string', () => {
		const title = 'Happy Day';
		const result = fixUrlTitle(title);
		const expectedResult = 'happy-day';

		expect(result).toEqual(expectedResult);
	});
});
