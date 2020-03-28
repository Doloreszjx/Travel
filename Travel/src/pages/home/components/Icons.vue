<template>
  <div class="icons">
    <div class="icon" v-for="item in iconList" :key="item.id">
      <div class="img-item">
        <div class="iconfont img-self">{{item.icon}}</div>
      </div>
      <p class="describe">{{item.describe}}</p>
    </div>
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
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
.icons
  overflow: hidden
  height: 0
  width: 100%
  padding-bottom: 50%
  background-color : #eee
  .icon
    position: relative
    float: left
    height: 0
    width: 33.3%
    padding-bottom: 33.3%
    .img-item
      position: absolute
      top:0
      left: 0
      right:0
      bottom:0
      box-sizing: border-box
      padding: .1rem
      .img-self
        display : block
        margin: 0 auto
        height: 100%
        font-size: 2.5rem
    .describe
      font-size: .44rem
      position: absolute
      left: 0
      right:0
      bottom: 0
      height: .44rem
      line-height : .44rem
      margin-top: .2rem
      text-align : center
      color: $darkTextColor

</style>
