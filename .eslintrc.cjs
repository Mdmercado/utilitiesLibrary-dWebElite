module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['standard-with-typescript', 'prettier'],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  ignorePatterns: [
    'dist/',
    'node_modules/',
    '.eslintrc.cjs',
    'vite.config.ts',
    'commitlint.config.cjs'
  ],
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error'
  }
}
