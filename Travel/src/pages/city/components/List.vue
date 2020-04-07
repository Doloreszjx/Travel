<template>
    <div class="list" ref="wrapper">
      <div>
        <div class="area">
          <div class="title border-topBottom">您的位置</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">{{this.$store.state.city}}</div>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topBottom">热门城市</div>
          <div class="button-list">
            <div class="button-wrapper"
                 v-for="item in hotCities"
                 :key="item.id"
                 @click="handleCityClick(item.name)"
            >
              <div class="button">{{item.name}}</div>
            </div>
          </div>
        </div>
        <div class="area"
             v-for="(item, key) in cities"
             :key="key"
             :ref="key"
        >
          <div class="title border-topBottom">{{key}}</div>
          <ul class="item-list"
              v-for="innerItem in item"
              :key="innerItem.id"
              @click="handleCityClick(innerItem.name)"
          >
            <li class="item border-bottom">
              {{innerItem.name}}
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'List',
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  methods: {
    handleCityClick (city) {
      this.$store.commit('changeCity', city)
      this.$router.push('./')
    }
  }
}
</script>

<style lang="stylus" scoped>
.border-topBottom
  &:before
    border-color: #ccc
  &:after
    border-color: #ccc
.border-bottom
  &:before
    border-color: #ccc
.list
  overflow: hidden
  position: absolute
  top: 1.58rem
  left: 0
  right: 0
  bottom: 0
  .title
    line-height: .54rem
    background: #eee
    padding-left: .2rem
    color: #666
    font-size: .26rem
  .button-list
    overflow: hidden
    padding: .1rem .6rem .1rem .1rem
    .button-wrapper
      float: left
      width: 33.33%
      .button
        margin: .1rem
        padding: .1rem 0
        text-align: center
        border: .02rem solid #ccc
        border-radius: .06rem
  .item-list
    .item
      line-height: .68rem
      padding-left: .2rem
</style>
