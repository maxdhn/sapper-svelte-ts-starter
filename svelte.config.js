const {
    preprocess: makeTsPreprocess,
    createEnv,
    readConfigFile,
} = require('@pyoner/svelte-ts-preprocess');
const { postcss } = require('svelte-preprocess');

const env = createEnv();
const compilerOptions = readConfigFile(env, './tsconfig.json');
const preprocessOptions = {
    env,
    compilerOptions: {
        ...compilerOptions,
        allowNonTsExtensions: true,
    },
};

const preprocess = makeTsPreprocess(preprocessOptions);

module.exports = {
    dev: process.env.NODE_ENV !== 'development',
    preprocess: [preprocess, postcss()],
};
