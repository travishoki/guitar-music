import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import noOnlyTests from 'eslint-plugin-no-only-tests';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import promise from 'eslint-plugin-promise';
import react from 'eslint-plugin-react';
import sortDestructureKeys from 'eslint-plugin-sort-destructure-keys';
import typescriptSortKeys from 'eslint-plugin-typescript-sort-keys';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	{
		// Only application source is linted; build/tooling config files are not.
		ignores: [
			'docs',
			'dist',
			'node_modules',
			'jest-coverage',
			'tools',
			'eslint.config.js',
			'jest.config.js',
			'webpack.config.*.js',
		],
	},
	js.configs.recommended,
	...tseslint.configs.recommended,
	react.configs.flat.recommended,
	importPlugin.flatConfigs.recommended,
	importPlugin.flatConfigs.typescript,
	promise.configs['flat/recommended'],
	prettierRecommended,
	{
		files: ['src/**/*.{js,ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: 'module',
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		plugins: {
			'@stylistic': stylistic,
			'no-only-tests': noOnlyTests,
			'sort-destructure-keys': sortDestructureKeys,
			'typescript-sort-keys': typescriptSortKeys,
		},
		settings: {
			react: {
				version: 'detect',
			},
			'import/resolver': {
				alias: {
					map: [['~svg', './src/svg']],
				},
				typescript: {},
			},
		},
		rules: {
			// General
			'dot-notation': 'error',
			eqeqeq: 'error',
			'no-duplicate-imports': 'error',
			'no-else-return': 'error',
			'no-extra-boolean-cast': 0,
			'no-nested-ternary': 'error',
			'no-only-tests/no-only-tests': 'error',
			'no-param-reassign': 'error',
			'no-unused-vars': 'off',
			'promise/catch-or-return': ['error', { allowFinally: true }],
			'promise/no-nesting': 'error',
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_',
				},
			],
			'no-var': 1,
			'object-shorthand': [1, 'properties'],
			'prefer-const': 1,
			'sort-destructure-keys/sort-destructure-keys': 2,
			'sort-keys': 'error',
			yoda: 'error',

			// Layout & Formatting (Prettier owns whitespace; keep only what it does not)
			'@stylistic/padding-line-between-statements': [
				1,
				{ blankLine: 'always', prev: '*', next: 'return' },
			],

			// React
			'react/display-name': 0,
			'react/jsx-key': 1,
			'react/jsx-no-duplicate-props': 1,
			'react/jsx-sort-props': ['error'],
			'react/jsx-uses-react': 1,
			'react/jsx-uses-vars': 1,
			'react/no-danger': 1,
			'react/no-direct-mutation-state': 1,
			'react/no-unknown-property': 1,
			'react/prefer-es6-class': 1,
			'react/prop-types': 1,
			'react/react-in-jsx-scope': 1,
			'react/self-closing-comp': 1,

			'import/order': [
				'error',
				{
					alphabetize: {
						order: 'asc',
					},
					groups: [
						'builtin',
						'external',
						'internal',
						['parent', 'sibling', 'index'],
						'object',
						'type',
					],
					'newlines-between': 'always',
					pathGroups: [
						{
							pattern: 'react',
							group: 'builtin',
							position: 'before',
						},
						{
							pattern: '~*/**',
							group: 'external',
							position: 'after',
						},
					],
					pathGroupsExcludedImportTypes: ['react'],
				},
			],

			// Typescript
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/naming-convention': [
				'error',
				{
					selector: 'class',
					format: ['PascalCase'],
				},
				{
					selector: 'enum',
					format: ['UPPER_CASE'],
				},
				{
					selector: 'enumMember',
					format: ['UPPER_CASE'],
				},
				{
					selector: 'interface',
					format: ['PascalCase'],
				},
				{
					selector: 'typeAlias',
					format: ['PascalCase'],
				},
			],
			'@typescript-eslint/no-empty-object-type': 'error',
			'typescript-sort-keys/interface': 'error',
			'typescript-sort-keys/string-enum': 'error',
		},
	},
);
