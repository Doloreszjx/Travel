<template>
  <div>
    <router-link to="/">
      <div class="iconfont icon">&#xe64e;</div>
    </router-link>
    <div class="header">城市选择</div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
.header
  height: $headerHeight
  line-height: $headerHeight
  text-align: center
  font-size: .32rem
  color: #ffffff
  background-color: $bgColor
.icon
  float: left
  height: $headerHeight
  line-height: $headerHeight
  margin-left: .1rem
  font-size: .4rem
  color: #fff
</style>
