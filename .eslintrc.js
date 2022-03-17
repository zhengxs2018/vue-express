// @ts-check

/**
 * @type {import('eslint').Linter.Config}
 */
const config = {
  root: true,
  env: {
    node: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['import', 'tsdoc'],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/script-setup-uses-vars': 'error',
    'tsdoc/syntax': 'warn'
  },
  overrides: [
    {
      files: ['packages/**/*.ts'],
      rules: {
        '@typescript-eslint/no-var-requires': 'warn',
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: false,
            optionalDependencies: false
          }
        ]
      }
    },
    {
      files: ['scripts/**/*.ts', '*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'warn',
        'tsdoc/syntax': 'off'
      }
    },
    {
      files: ['test', '__test__', '*.{spec,test}.ts'],
      env: {
        jest: true
      },
      rules: {
        'tsdoc/syntax': 'off',
        'import/no-extraneous-dependencies': 'off'
      }
    }
  ]
}

module.exports = config
