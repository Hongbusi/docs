declare module '@vue/theme/config' {
  import type { UserConfig } from 'vitepress'
  const config: () => Promise<UserConfig>
  export default config
}
