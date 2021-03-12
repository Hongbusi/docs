<template>
  <div class="footer">
    <p>{{ $themeConfig.copyright }}</p>
    <a :href="$themeConfig.recordLink">{{ $themeConfig.record }}</a>
  </div>
</template>

<script>
export default {
  name: 'Footer',

}
</script>

<style lang="stylus" scoped>
.footer a
  color: #4e6e8e;
  font-weight: normal;
  transition: all 0.3s;

  &:hover
    color: red;
    text-decoration: underline;
</style>
