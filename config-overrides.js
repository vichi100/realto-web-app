const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

// our packages that will now be included in the CRA build step
const appIncludes = [
    resolveApp('src'),
    resolveApp('../common/src'),
    resolveApp('../../node_modules/@react-navigation'),
    resolveApp('../../node_modules/react-navigation'),
    resolveApp('../../node_modules/react-native-gesture-handler'),
    resolveApp('../../node_modules/react-native-screens'),
];

module.exports = function override(config, env) {
    config.module.rules.push({
        test: /.(js|mjs|tsx|ts)$/,
        exclude: /@babel(?:\/|\{1,2})runtime/,
        use: {
            loader: 'babel-loader',
            options: {
                babelrc: false,
                configFile: false,
                compact: false,
                // The configration for compilation
                presets: [
                    [
                        'module:metro-react-native-babel-preset',
                    ], // Add this line,
                    [
                        require.resolve('babel-preset-react-app/dependencies'),
                        { helpers: true },
                    ],
                ],
                cacheDirectory: true,
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    '@babel/plugin-proposal-object-rest-spread',
                    '@babel/plugin-transform-flow-strip-types',
                    '@babel/plugin-transform-react-jsx',
                    [
                        'module-resolver',
                        {
                            alias: {
                                '^react-native$': 'react-native-web',
                            },
                        },
                    ]
                ],
            },
        },
    });
    return config;
};