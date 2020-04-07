<template>
  <div>
    <div class="wrapper">
      <input
        class="item-input"
        type="text"
        placeholder="输入城市名或拼音"
        v-model="keyword"
      />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom"
            v-for="item in list"
            :key="item.id"
        >
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Search',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const result = []
        if (!this.keyword) {
          this.list = []
          return
        }
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search)
  }
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
.search-content
  overflow: hidden
  position: absolute
  top: 1.58rem
  left:0
  bottom: 0
  right: 0
  z-index: 1
  background-color: #eee
  .search-item
    line-height: .62rem
    padding-left: .2rem
    color: #666
    background-color: #fff
</style>
