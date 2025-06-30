import antfu from '@antfu/eslint-config'

export default antfu({
  react: true,
  typescript: true,
  rules: {
    'node/prefer-global/process': 'off',
    'react/no-array-index-key': 'off',
    'react/no-context-provider': 'off',
    'react-dom/no-dangerously-set-innerhtml': 'off',
    'react-refresh/only-export-components': 'off',
  },
})
