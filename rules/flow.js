const flowRules = {
  'flowtype-errors/show-errors': 2,
  'flowtype/no-types-missing-file-annotation': 2,
  'flowtype/no-weak-types': 2,
  'flowtype/require-parameter-type': 2,
  'flowtype/require-return-type': [
    2,
    'always',
    { annotateUndefined: 'always', excludeArrowFunctions: 'expressionsOnly' },
  ],
  'flowtype/require-variable-type': [
    2,
    { excludeVariableTypes: { const: true, let: false, var: false } },
  ],
}

module.exports = { flowRules }
