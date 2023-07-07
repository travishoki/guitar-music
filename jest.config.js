export default {
	coverageDirectory: './jest-coverage',
	coverageReporters: ['json'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	preset: 'ts-jest',
	testEnvironment: 'node',
	transformIgnorePatterns: ['node_modules', 'dist'],
};
