<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="img-item">
            <div class="iconfont img-self">{{item.icon}}</div>
          </div>
          <p class="describe">{{item.describe}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'Icons',
  data: function () {
    return {
      iconList: [{
        id: '001',
        icon: '\ue622',
        describe: '国内机票'
      }, {
        id: '002',
        icon: '\ue73f;',
        describe: '酒店客栈'
      }, {
        id: '003',
        icon: '\ue601;',
        describe: '景区门票'
      }, {
        id: '004',
        icon: '\ue67a;',
        describe: '旅游度假'
      }, {
        id: '005',
        icon: '\ue89b;;',
        describe: '国际机票'
      }, {
        id: '006',
        icon: '\ue61d;',
        describe: '旅行游记'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
@import '~style/mixins.styl'
.icons
  overflow: hidden
  height: 0
  width: 100%
  padding-bottom: 66.8%
  /*background-color : #eee*/
  .icon
    position: relative
    float: left
    height: 0
    width: 33.3%
    padding-bottom: 33.3%
    .img-item
      position: absolute
      top:50%
      left: 50%
      transform: translate(-50%, -50%)
      box-sizing: border-box
      padding: .1rem
      height: 100%
      .img-self
        display : block
        margin: 0 auto
        padding-top: .5rem
        font-size: .85rem
    .describe
      font-size: .28rem
      position: absolute
      left: 0
      right:0
      bottom: 0
      height: .44rem
      line-height : .44rem
      padding-bottom: .2rem
      text-align : center
      color: $darkTextColor
      ellipsis()

</style>
