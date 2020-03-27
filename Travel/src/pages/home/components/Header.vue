<template>
    <div class="header">
      <div class="header-left"></div>
      <input class="header-middle" type="text" placeholder="please search your interests" name="input" id="input">
      <div class="header-right">城市</div>
    </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="stylus" scoped>
  .header
    display: flex
    height: .86rem
    background-color: #00bcd4
    color : #fff
    .header-left
      width: .64rem
      float: left
      background-color: pink
    .header-middle
      flex: 1
      color: #fff
      inline-height: .52rem
      height: .52rem
      margin-top: .12rem
      margin-bottom: .12rem
      margin-left: .1rem
      background-color: #ffffff
      border-radius: .1rem
    .header-right
      width: 1.24rem
      float: right
      line-height: .86rem
      text-align :center
</style>
