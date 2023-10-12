'use strict';

module.exports = {
  singleQuote: true,
  overrides: [
    {
      // Lol, JavaScript
      files: ['*.js', '*.ts', '*.cjs', '.mjs', '.cts', '.mts', '.cts'],
      options: {
        singleQuote: true,
        trailingComma: 'es5',
      },
    },
    {
      files: '*.hbs',
      options: {
        singleQuote: false,
      },
    },
  ],
};
