<template>
  <div>
    <div class="title">热门推荐</div>
    <ul>
      <li class="item border-bottom"  v-for="item in itemList" :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.describe}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  data: function () {
    return {
      itemList: [{
        id: '001',
        imgUrl: 'http://n1-q.mafengwo.net/s15/M00/C8/0E/CoUBGV34OIGAe5fYAATgHXf_EgY11.jpeg?imageMogr2%2Fthumbnail%2F%21400x300r%2Fgravity%2FCenter%2Fcrop%2F%21400x300%2Fquality%2F100',
        title: '西安',
        describe: '  中国年看西安 家庭亲子5日定制游（下单有好礼+拍全家福+牵手不倒翁小姐姐+打卡不夜大唐+赏雪景冰瀑+雁塔祈福+芙蓉园灯会闹新春）'
      }, {
        id: '002',
        imgUrl: 'http://p1-q.mafengwo.net/s12/M00/6B/8E/wKgED1z3NuGALQmpAADl5g6r6z853.jpeg?imageMogr2%2Fthumbnail%2F%21400x300r%2Fgravity%2FCenter%2Fcrop%2F%21400x300%2Fquality%2F100',
        title: '山西',
        describe: '  行摄黄河晋秦10日定制游（入住晋陕特色窑洞/客栈+体验黄河民俗风情+开启两地地质奇观美拍之旅）'
      }, {
        id: '003',
        imgUrl: 'http://b1-q.mafengwo.net/s14/M00/EF/2F/wKgE2l0fK4GAIlFAAABVhu7uuTI06.jpeg?imageMogr2%2Fthumbnail%2F%21400x300r%2Fgravity%2FCenter%2Fcrop%2F%21400x300%2Fquality%2F100',
        title: '杭州',
        describe: ' 江南水乡·杭州 乌镇 4天3晚 定制游（全程接送+高档酒店+宋城门票+网红打卡西溪湿地/西湖+VIP服务+更多景点不容错过）'
      }]
    }
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
