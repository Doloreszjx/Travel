<template>
    <div class="header" id="list">
      <div class="header-left">
        <div class="iconfont icon-back">&#xe64e;</div>
      </div>
      <div class="iconfont icon-mag">&#xe848;</div>
      <input class="header-middle" type="text" placeholder="please search your interests" name="input" id="input">
      <div class="header-right">
        城市
        <span class="iconfont">&#xe60b;</span>
      </div>
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
    display: flex
    height: .86rem
    background-color: $bgColor
    color : #fff
    .header-left
      width: .64rem
      float: left
      border-right: .01rem solid
      .icon-back
        text-align :center
        margin-top : .2rem
        font-size: .4rem
    .icon-mag
      text-align :center
      margin-top : .2rem
      padding-left: .1rem
      font-size: .4rem
    .header-middle
      flex: 1
      color: #fff
      inline-height: .52rem
      height: .52rem
      margin-top: .15rem
      margin-bottom: .12rem
      margin-left: .1rem
      padding-left:.2rem
      background-color: #ffffff
      border-radius: .1rem
    .header-right
      width: 1.24rem
      float: right
      line-height: .86rem
      text-align :center
</style>
