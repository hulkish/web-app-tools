export default {
  root: true,
  parser: 'babel-eslint',
  plugins: ['jsx-a11y', 'import', 'inferno'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: true,
      experimentalObjectRestSpread: true
    }
  },
  settings: {
    'import/ignore': ['node_modules'],
    'import/extensions': ['.js', '.jsx'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json']
      }
    }
  },
  rules: {
    'array-callback-return': 'warn',
    'default-case': ['warn', { commentPattern: '^no default$' }],
    'dot-location': ['warn', 'property'],
    eqeqeq: ['warn', 'allow-null'],
    'new-parens': 'warn',
    'no-array-constructor': 'warn',
    'no-caller': 'warn',
    'no-cond-assign': ['warn', 'always'],
    'no-const-assign': 'warn',
    'no-control-regex': 'warn',
    'no-delete-var': 'warn',
    'no-dupe-args': 'warn',
    'no-dupe-class-members': 'warn',
    'no-dupe-keys': 'warn',
    'no-duplicate-case': 'warn',
    'no-empty-character-class': 'warn',
    'no-empty-pattern': 'warn',
    'no-eval': 'warn',
    'no-ex-assign': 'warn',
    'no-extend-native': 'warn',
    'no-extra-bind': 'warn',
    'no-extra-label': 'warn',
    'no-fallthrough': 'warn',
    'no-func-assign': 'warn',
    'no-implied-eval': 'warn',
    'no-invalid-regexp': 'warn',
    'no-iterator': 'warn',
    'no-label-var': 'warn',
    'no-labels': ['warn', { allowLoop: false, allowSwitch: false }],
    'no-lone-blocks': 'warn',
    'no-loop-func': 'warn',
    'no-mixed-operators': ['warn', {
      groups: [
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof'],
      ],
      allowSamePrecedence: false
    }],
    'no-multi-str': 'warn',
    'no-native-reassign': 'warn',
    'no-negated-in-lhs': 'warn',
    'no-new-func': 'warn',
    'no-new-object': 'warn',
    'no-new-symbol': 'warn',
    'no-new-wrappers': 'warn',
    'no-obj-calls': 'warn',
    'no-octal': 'warn',
    'no-octal-escape': 'warn',
    'no-redeclare': 'warn',
    'no-regex-spaces': 'warn',
    'no-restricted-syntax': ['warn', 'LabeledStatement', 'WithStatement'],
    'no-script-url': 'warn',
    'no-self-assign': 'warn',
    'no-self-compare': 'warn',
    'no-sequences': 'warn',
    'no-shadow-restricted-names': 'warn',
    'no-sparse-arrays': 'warn',
    'no-template-curly-in-string': 'warn',
    'no-this-before-super': 'warn',
    'no-throw-literal': 'warn',
    'no-undef': 'error',
    'no-restricted-globals': ['error', 'event'],
    'no-unexpected-multiline': 'warn',
    'no-unreachable': 'warn',
    'no-unused-expressions': ['warn', {
      allowShortCircuit: true,
      allowTernary: true
    }],
    'no-unused-labels': 'warn',
    'no-unused-vars': ['warn', {
      vars: 'local',
      varsIgnorePattern: '^_',
      args: 'none',
      ignoreRestSiblings: true
    }],
    'no-use-before-define': ['warn', 'nofunc'],
    'no-useless-computed-key': 'warn',
    'no-useless-concat': 'warn',
    'no-useless-constructor': 'warn',
    'no-useless-escape': 'warn',
    'no-useless-rename': ['warn', {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false
    }],
    'no-with': 'warn',
    'no-whitespace-before-property': 'warn',
    'operator-assignment': ['warn', 'always'],
    radix: 'warn',
    'require-yield': 'warn',
    'rest-spread-spacing': ['warn', 'never'],
    strict: ['warn', 'never'],
    'unicode-bom': ['warn', 'never'],
    'use-isnan': 'warn',
    'valid-typeof': 'warn',
    'no-restricted-properties': ['error', {
      object: 'require',
      property: 'ensure',
      // eslint-disable-next-line max-len
      message: 'Please use import() instead. More info: https://webpack.js.org/guides/code-splitting-import/#dynamic-import',
    }, {
      object: 'System',
      property: 'import',
      // eslint-disable-next-line max-len
      message: 'Please use import() instead. More info: https://webpack.js.org/guides/code-splitting-import/#dynamic-import',
    }],
    'import/default': 'warn',
    'import/export': 'warn',
    'import/named': 'warn',
    'import/namespace': 'warn',
    'import/no-amd': 'warn',
    'import/no-duplicates': 'warn',
    'import/no-extraneous-dependencies': 'warn',
    'import/no-named-as-default': 'warn',
    'import/no-named-as-default-member': 'warn',
    'import/no-unresolved': ['warn', { commonjs: true }],
    'import/no-webpack-loader-syntax': 'error',

    'jsx-a11y/aria-role': 'warn',
    'jsx-a11y/img-has-alt': 'warn',
    'jsx-a11y/img-redundant-alt': 'warn',
    'jsx-a11y/no-access-key': 'warn',

    'inferno/jsx-equals-spacing': ['warn', 'never'],
    'inferno/jsx-no-duplicate-props': ['warn', { ignoreCase: true }],
    'inferno/jsx-no-undef': 'error',
    'inferno/jsx-pascal-case': ['warn', {
      allowAllCaps: true,
      ignore: []
    }],
    'inferno/jsx-uses-vars': 'warn',
    'inferno/no-danger-with-children': 'warn',
    'inferno/no-deprecated': 'warn',
    'inferno/no-direct-mutation-state': 'warn',
    'inferno/no-is-mounted': 'warn',
    'inferno/inferno-in-jsx-scope': 0,
    'inferno/style-prop-object': 'warn'
  }
};
