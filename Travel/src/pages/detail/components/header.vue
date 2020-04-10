<template>
   <div>
     <router-link
       tag="div"
       to="/"
       class="header-back"
       v-show="showIcon"
     >
       <div class="iconfont icon">&#xe64e;</div>
     </router-link>
     <router-link
       tag="div"
       to="/"
       class="header-fixed"
       v-show="!showIcon"
       :style="myOpacity"
     >
       <div class="iconfont header-fixed-back">&#xe64e;</div>
       城市选择
     </router-link>
   </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showIcon: true,
      myOpacity: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        this.showIcon = false
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.myOpacity = {opacity}
      } else {
        this.showIcon = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
.header-back
  position: absolute
  height: $headerHeight
  width: .8rem
  line-height: $headerHeight
  left: .2rem
  top: .2rem
  text-align: center
  border-radius: .4rem
  background: rgba(0,0,0,.8)
  .icon
    float: left
    height: $headerHeight
    line-height: $headerHeight
    margin-left: .1rem
    color: #eee
.header-fixed
  z-index: 2
  position: fixed
  top: 0
  left: 0
  right: 0
  height: $headerHeight
  line-height: $headerHeight
  text-align: center
  color: #fff
  background: $bgColor
  font-size: .32rem
  .header-fixed-back
    position: absolute
    top: 0
    left: 0
    right: 0
    width: .64rem
    text-align: center
    font-size: .4rem
    color: #fff
</style>
