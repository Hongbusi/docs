<template>
  <div class="footer-wrapper">
    <span>
      Copyright ©
      <span v-if="$themeConfig.startYear && $themeConfig.startYear != (new Date().getFullYear())">{{ $themeConfig.startYear }} - </span>
      {{ new Date().getFullYear() }}
      <span v-if="$themeConfig.author">{{ $themeConfig.author }}</span>
    </span>
    <span v-show="showAccessNumber">
      <reco-icon icon="reco-eye" />
      <AccessNumber idVal="/" />
    </span>
    <p v-if="$themeConfig.record">
      <a :href="$themeConfig.recordLink || '#'" target="_blank">{{ $themeConfig.record }}</a>
    </p>
    <p class="cyber-security" v-if="$themeConfig.cyberSecurityRecord">
      <img src="https://img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png" alt="">
      <a :href="$themeConfig.cyberSecurityLink || '#'">{{ $themeConfig.cyberSecurityRecord }}</a>
    </p>
    <Comments :isShowComments="false"/>
  </div>
</template>

<script>
import { defineComponent, computed, getCurrentInstance } from 'vue-demi'
import { RecoIcon } from '@vuepress-reco/core/lib/components'
import { version } from '../package.json'
export default defineComponent({
  components: { RecoIcon },
  setup (props, ctx) {
    const instance = getCurrentInstance().proxy
    const showAccessNumber = computed(() => {
      const {
        $themeConfig: { valineConfig },
        $themeLocaleConfig: { valineConfig: valineLocalConfig }
      } = instance

      const vc = valineLocalConfig || valineConfig

      return vc && vc.visitor != false
    })
    return { version, showAccessNumber }
  }
})
</script>

<style lang="stylus" scoped>
  .footer-wrapper {
    padding: 1.5rem 2.5rem;
    border-top: 1px solid var(--border-color);
    text-align: center;
    color: lighten($textColor, 25%);
    a {
      font-weight: normal;
      font-size: 14px;
      color: lighten($textColor, 25%);

      &:hover {
        color: $accentColor;
        text-decoration: underline;
      }
    }
    > span {
      margin-left 1rem
      > i {
        margin-right .5rem
      }
    }
    .cyber-security {
      img {
        margin-right .5rem
        width 20px
        height 20px
        vertical-align middle
      }
      a {
        vertical-align middle
      }
    }
  }

@media (max-width: $MQMobile) {
  .footer {
    text-align: left!important;
    > span {
      display block
      margin-left 0
      line-height 2rem
    }
  }
}
</style>
