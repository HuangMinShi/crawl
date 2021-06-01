module.exports = {
	parser: 'babel-eslint',
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true,
	},
	extends: [
		'airbnb-base',
	],
	parserOptions: {
		ecmaVersion: 2017,
		sourceType: 'module',
	},
	plugins: [
		'async-await',
	],
	rules: {
		'no-console': 'warn',
		'async-await/space-after-async': 'error',
		'async-await/space-after-await': 'error',
		semi: 'error',
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
		'newline-after-var': 'off',
		'object-curly-spacing': ['error', 'always'],
		'key-spacing': 'error',
		'keyword-spacing': 'error',
		'space-in-parens': ['error', 'never'],
		'space-before-blocks': 'error',
		'arrow-spacing': 'error',
		'space-infix-ops': 'error',
		'comma-dangle': ['error',
			{
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'always-multiline',
				exports: 'always-multiline',
				functions: 'never',
			},
		],
		quotes: ['error', 'single'],
		'no-unused-vars': 'error',
		'eol-last': ['error', 'always'],
		'comma-spacing': ['error', { before: false, after: true }],
		'padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'return' }],
		'no-tabs': ['error', { allowIndentationTabs: true }],
	},
};
