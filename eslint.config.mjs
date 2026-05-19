import nextVitals from 'eslint-config-next/core-web-vitals';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';

const eslintConfig = [
  ...nextVitals,
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports
    },
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // 1. Framework imports (Next / React)
            ['^next', '^react', '^react-dom'],

            // 2. External libraries
            ['^@?\\w'],

            // 3. Internal absolute imports
            ['^(@/|components/|lib/|hooks/|utils/)'],

            // 4. Styles
            ['^.+\\.module\\.(css|scss)$', '^.+\\.(css|scss)$'],

            // 5. Relative imports last
            ['^\\./', '^\\../']
          ]
        }
      ],
      'simple-import-sort/exports': 'error',
      'unused-imports/no-unused-imports': 'error'
    }
  }
];

export default eslintConfig;
