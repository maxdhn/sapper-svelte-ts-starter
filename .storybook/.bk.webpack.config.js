const path = require('path');

module.exports = ({ config, mode }) => {
    config.module.rules.push(
        {
            test: /\.(html|svelte)$/, exclude: /node_modules\/(?!svelte)/,
            use: [

                { //svelte loader first
                    loader: 'svelte-loader',
                    options: {
                        preprocess: require('svelte-preprocess')({
                            /* options */
                            // scss: {
                            //     includePaths: [buildconfig.tmpFolder]
                            // },
                            typescript: {
                                compilerOptions: {
                                    module: 'es2015'
                                }
                            },
                            // postcss: true
                        })
                        // store: true,
                        // hydratable: true,
                        // preprocess: {
                        //     style: preprocessStyle('less')
                        // }
                    }
                },
                // { //babel loader after the svelte loader
                //     loader: 'babel-loader',
                //     options: {
                //         presets: ['@babel/preset-env'],
                //     }
                // },
            ]
        },
        {
            test: /\.(html|svelte)$/, exclude: /node_modules\/(?!svelte)/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
            }

        },
        {
            test: /\.css$/,
            loaders: [
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                        config: {
                            path: './.storybook/',
                        },
                    },
                },
            ],

            include: path.resolve(__dirname, '../src/storybook/'),
        },
        //This is the new block for the addon
        {
            test: /\.stories\.js?$/,
            loaders: [require.resolve('@storybook/addon-storysource/loader')],
            include: [path.resolve(__dirname, '../src/storybook')],
            enforce: 'pre',
        },
    );

    return config;
};