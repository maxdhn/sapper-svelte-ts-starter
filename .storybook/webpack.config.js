const merge = require('webpack-merge');
const { CheckerPlugin } = require('awesome-typescript-loader');
const path = require('path');

module.exports = ({ config, mode }) => {
    let mergedConfig = merge.smart(config, {
        module:
        {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    use: [
                        {
                            loader: require.resolve('awesome-typescript-loader'),
                        },
                        // Optional
                        {
                            loader: require.resolve('react-docgen-typescript-loader'),
                        },
                    ],
                },
                {
                    test: /\.(svelte|html)$/,
                    loader: 'svelte-loader',
                    options: {
                        // onwarn: onwarn,
                        preprocess: require('svelte-preprocess')({
                            // scss: {
                            // importer: [
                            // scssAliases(aliases),
                            // ],
                            // }
                        })
                    }
                },
                {
                    test: /\.stories\.js?$/,
                    loaders: [require.resolve('@storybook/addon-storysource/loader')],
                    include: [path.resolve(__dirname, '../stories')],
                    enforce: 'pre',
                },
            ]
        },
    });
    mergedConfig.resolve.alias = {
        ...mergedConfig.resolve.alias,
        svelte: path.resolve('node_modules', 'svelte'),
        '@src': path.resolve(__dirname, 'src/'),
        '@styles': path.resolve(__dirname, 'src/styles/'),
        '@common': path.resolve(__dirname, 'src/common/'),
    };
    mergedConfig.plugins.push(new CheckerPlugin());
    return mergedConfig;
};
