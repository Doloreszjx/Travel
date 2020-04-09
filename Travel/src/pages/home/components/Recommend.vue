<template>
  <div>
    <div class="title">热门推荐</div>
    <ul>
      <router-link
        class="item border-bottom"
        v-for="item in list"
        :key="item.id"
        tag="li"
        :to="'/detail/' + item.id"
      >
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/mixins.styl'
.title
  margin-top: .2rem
  line-height: .8rem
  text-indent : .2rem
  background-color : #eee
.item
  overflow :hidden
  display: flex
  height: 1.9rem
  .item-img
    width: 1.7rem
    height: 1.7rem
    padding: .1rem
  .item-info
    flex: 1
    padding: .1rem
    min-width: 0
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #cacaca
      ellipsis()
    .item-button
      float: right
      line-height : .44rem
      padding: 0 .1rem
      border-radius : .06rem
      margin-top: .2rem
      background-color: coral
      color: #ffffff
</style>
