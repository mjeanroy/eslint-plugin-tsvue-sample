module.exports = {
  root: true,

  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    extraFileExtensions: [
      '.vue'
    ]
  },

  plugins: [
    'vue',
    'tsvue'
  ],

  extends: [
    'plugin:vue/essential'
  ],

  overrides: [
    {
      files: [
        '*.tsvue'
      ],

      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: [
          '.tsvue'
        ]
      },

      plugins: [
        'vue',
        '@typescript-eslint'
      ],

      extends: [
        'plugin:vue/essential',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended'
      ]
    }
  ]
}
