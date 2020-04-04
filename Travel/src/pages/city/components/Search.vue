<template>
  <div class="wrapper">
    <input class="item-input" type="text" placeholder="输入城市名或拼音"/>
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
.wrapper
  overflow: hidden
  height: .72rem
  line-height: .72rem
  padding: 0 .2rem
  background-color: $bgColor
  .item-input
    box-sizing: border-box
    width: 100%
    height: .62rem
    line-height: .62rem
    padding: 0 .2rem
    text-align: center
    border-radius: .1rem
    color: #666
    background-color: #ffffff
</style>
