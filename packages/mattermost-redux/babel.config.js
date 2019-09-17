// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

const config = {
    presets: [
        ['@babel/preset-env', {
            targets: {
                chrome: 66,
                firefox: 60,
                edge: 42,
                safari: 12,
            },
            modules: false,
            corejs: 3,
            useBuiltIns: 'usage',
            shippedProposals: true,
        }],
    ],
    plugins: [
        '@babel/transform-flow-comments',
        '@babel/proposal-class-properties',
        '@babel/plugin-proposal-optional-chaining',
        ['module-resolver', {
            root: ['./src', '.'],
        }],
    ],
};

// Jest needs module transformation
config.env = {
    test: {
        presets: config.presets,
        plugins: config.plugins,
    },
};
config.env.test.presets[0][1].modules = 'auto';

module.exports = config;