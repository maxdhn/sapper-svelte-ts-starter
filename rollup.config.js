import alias from '@rollup/plugin-alias';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import svelte from 'rollup-plugin-svelte';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import config from 'sapper/config/rollup.js';

import pkg from './package.json';

const svelteOptions = require("./svelte.config");
const purgecss = require('@fullhuman/postcss-purgecss');

const production = process.env.NODE_ENV === 'production' ? true : false;

const mode = process.env.NODE_ENV;
const dev = mode === "development";
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const onwarn = (warning, onwarn) =>
    (warning.code === "CIRCULAR_DEPENDENCY" &&
        /[/\\]@sapper[/\\]/.test(warning.message)) ||
    onwarn(warning);

const plugins = [
    require('postcss-import')(),
    require('tailwindcss')('tailwind.js'),
]

if (production) {
    plugins.push(
        purgecss({
            content: ['./**/*.html', './**/*.svelte'],
            defaultExtractor: content => {
                // console.log(production, process.env.ROLLUP_WATCH)
                const regExp = new RegExp(/[A-Za-z0-9-_:/]+/g);

                const matchedTokens = [];

                let match = regExp.exec(content);
                // To make sure that you do not lose any tailwind classes used in class directive.
                // https://github.com/tailwindcss/discuss/issues/254#issuecomment-517918397
                while (match) {
                    if (match[0].startsWith('class:')) {
                        matchedTokens.push(match[0].substring(6));
                    } else {
                        matchedTokens.push(match[0]);
                    }

                    match = regExp.exec(content);
                }

                return matchedTokens;
            },
        }),
    )
    plugins.push(
        require("cssnano")()
    )
}
export default {
    client: {
        input: config.client.input(),
        output: {
            ...config.client.output(),
            sourcemap: true,
            // format: "iife",
        },
        plugins: [
            // alias({
            //     entries: [
            //         { find: 'sng-app', replacement: './src/components' },
            //         // { find: '.', replacement: '.' },
            //     ]
            // }),
            replace({
                "process.browser": true,
                "process.env.NODE_ENV": JSON.stringify(mode)
            }),
            svelte({
                dev,
                ...svelteOptions,
                hydratable: true,
                emitCss: true,
            }),
            resolve({
                browser: true
            }),
            commonjs(),
            typescript(),
            legacy &&
            babel({
                extensions: [".js", ".mjs", ".html", ".svelte"],
                runtimeHelpers: true,
                exclude: ["node_modules/@babel/**"],
                presets: [
                    [
                        "@babel/preset-env",
                        {
                            targets: "> 0.25%, not dead"
                        }
                    ]
                ],
                plugins: [
                    "@babel/plugin-syntax-dynamic-import",
                    [
                        "@babel/plugin-transform-runtime",
                        {
                            useESModules: true
                        }
                    ]
                ]
            }),

            !dev &&
            terser({
                module: true
            })
        ],

        onwarn
    },

    server: {
        input: config.server.input(),
        output: config.server.output(),
        plugins: [
            // alias({
            //     entries: [
            //         { find: 'sng-app', replacement: './src/components' },
            //     ]
            // }),
            replace({
                "process.browser": false,
                "process.env.NODE_ENV": JSON.stringify(mode)
            }),
            svelte({
                ...svelteOptions,
                generate: "ssr",
                dev,
            }),
            resolve(),
            commonjs(),
            typescript()
        ],
        external: Object.keys(pkg.dependencies).concat(
            require("module").builtinModules ||
            Object.keys(process.binding("natives"))
        ),

        onwarn
    },

    serviceworker: {
        input: config.serviceworker.input(),
        output: config.serviceworker.output(),
        plugins: [
            resolve(),
            replace({
                "process.browser": true,
                "process.env.NODE_ENV": JSON.stringify(mode)
            }),
            commonjs(),
            !dev && terser()
        ],

        onwarn
    }
};
