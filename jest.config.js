const svelteConfig = require('./svelte.config');

module.exports = {
    moduleNameMapper: {
        '^utils(.*)$': '<rootDir>/src/utils$1',
    },
    testPathIgnorePatterns: ['/node_modules/', '/cypress/'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js', '@testing-library/jest-dom/extend-expect'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '^.+\\.js$': 'babel-jest',
        '^.+\\.svelte$': ['svelte-jester', { preprocess: true }],
    },
    collectCoverageFrom: [
        '!./src/client.js',
        '!./src/server.js',
        '!./src/service-worker.js',
        './src/**/*.svelte',
        './src/**/*.svelte',
        './src/**/*.ts',
        './src/**/*.js',
    ],
    //   globals: {
    //     svelte: {
    //       preprocess: svelteConfig.preprocess,
    //       compilerOptions: {
    //         accessors: true,
    //       },
    //     },
    //   },
    moduleFileExtensions: ['ts', 'js', 'svelte'],
};
