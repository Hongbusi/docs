// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
  astro: true,
  ignores: [
    '**/old',
  ],
})
