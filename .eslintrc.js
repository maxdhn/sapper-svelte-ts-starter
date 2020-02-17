const svelteOptions = require('./svelte.config');
module.exports = {

    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
    },
    env: {
        es6: true,
        browser: true,
        node: true,
        jest: true,
    },
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/@typescript-eslint',
    ],
    plugins: ['html','svelte3-sg', '@typescript-eslint'],
    overrides: [
        {
            files: ['**/*.svelte'],
            processor: 'svelte3-sg/svelte3',
        },
    ],
    settings: {
        'svelte3/preprocess': svelteOptions,
        'svelte3/ignore-warnings': () => true
    },
    rules: {
        'no-unused-vars': [
            'error',
            {
                args: 'after-used',
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
            },
        ],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
    },
};
