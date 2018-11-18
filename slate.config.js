/* eslint-disable */

// Configuration file for all things Slate.
// For more information, visit https://github.com/Shopify/slate/wiki/Slate-Configuration

const path = require('path');

const rules = [
  {
    test: /snippets\/.*\.liquid$/,
    loader: 'file-loader',
    options: {
      name: `../snippets/[name].[ext]`,
    }
  },
  {
    test: /sections\/.*\.liquid$/,
    loader: 'file-loader',
    options: {
      name: `../sections/[name].[ext]`,
    }
  },
];

module.exports = {
  'cssVarLoader.liquidPath': ['src/snippets/css-variables.liquid'],
  'webpack.extend': {
    resolve: {
      alias: {
        jquery: path.resolve('./node_modules/jquery'),
        'lodash-es': path.resolve('./node_modules/lodash-es'),
      },
    },
    module: { rules },
  },
  'webpack.commonExcludes': [
    /node_modules/,
    /assets\/static/,
    /sections\/.*\.liquid$/,
    /snippets\/.*\.liquid$/,
  ],
};
