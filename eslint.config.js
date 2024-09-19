export default [
    {
      ignores: ['node_modules'],
    },
    {
      files: ['**/*.js'],
      languageOptions: {
        ecmaVersion: 'latest',
      },
      rules: {
        'no-unused-vars': 'error',  // Warnung in Fehler umwandeln
        'no-console': 'off',
        'semi': ['error', 'always']  // Semikolon erzwingen
      },
    },
  ];
  