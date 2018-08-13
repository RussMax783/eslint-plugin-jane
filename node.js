const nodeRules = {
  'no-process-exit': 0,
  'node/no-extraneous-import': 1,
  'node/no-extraneous-require': 1,
  'node/no-missing-import': 2,
  'node/no-missing-require': 2,
  'node/no-unpublished-bin': 2,
  'node/no-unpublished-import': 1,
  'node/no-unpublished-require': 1,
  'node/no-unsupported-features/es-builtins': 2,
  'node/no-unsupported-features/es-syntax': 0,
  'node/no-unsupported-features/node-builtins': 2,
  'node/process-exit-as-throw': 1,
  'node/shebang': 0,
  'node/no-deprecated-api': 1,
  'node/prefer-global/buffer': [1, 'never'],
  'node/prefer-global/console': [1, 'always'],
  'node/prefer-global/process': [1, 'always'],
  'node/prefer-global/url-search-params': [1, 'never'],
  'node/prefer-global/url': [1, 'never'],
}

module.exports = { nodeRules }
