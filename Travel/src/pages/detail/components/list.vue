<template>
    <div>
      <div
        class="item"
        v-for="(item, index) in list"
        :key="index">
        <div class="item-title border-bottom">
          <span class="item-title-icon"></span>
          {{item.title}}
        </div>
        <div v-if="item.children" class="item-chilren">
          <detail-list :list="item.children"></detail-list>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
.item-title
  line-height: .8rem
  font-size: .32rem
  padding: 0 .2rem
  .item-title-icon
    position: relative
    display: inline-block
    left: .6rem
    top: .6rem
    width: .32rem
    height: .32rem
    margin-right: .1rem
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
    background-size: .3rem .4rem
.item-chilren
  padding: 0 .2rem
</style>
