<template>
  <div>
    <div class="title">近期优惠</div>
    <ul>
      <li class="item border-bottom"  v-for="item in itemList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-desc">{{item.describe}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Weekend',
  data: function () {
    return {
      itemList: [{
        id: '001',
        imgUrl: 'http://b1-q.mafengwo.net/s11/M00/05/7C/wKgBEFpxX2iADrX2AF9OhB40BjA01.jpeg?imageMogr2%2Fthumbnail%2F%21657x280r%2Fgravity%2FCenter%2Fcrop%2F%21657x280%2Fquality%2F100',
        describe: '  新品推荐·波浪彩谷 美西波浪谷+大峡谷+羚羊谷4日游（多地出发/马蹄湾+西峡谷+胡佛水坝/旧金山+洛杉矶+拉斯维加斯）'
      }, {
        id: '002',
        imgUrl: 'http://b1-q.mafengwo.net/s12/M00/AF/73/wKgED1w3B6WAKbfYAAEzHRLE-t442.jpeg?imageMogr2%2Fthumbnail%2F%21400x300r%2Fgravity%2FCenter%2Fcrop%2F%21400x300%2Fquality%2F100',
        describe: ' 免门票·送东线·敦煌西线一日游·3-7人团·雅丹日落·可拍星空·当地人带你玩·能撩会拍（西千佛洞+敦煌古城+阳关+玉门关+雅丹地貌魔鬼城)'
      }, {
        id: '003',
        imgUrl: 'http://n1-q.mafengwo.net/s11/M00/B7/B3/wKgBEFt_uI6ALNY3AAJSw980a7I71.jpeg?imageMogr2%2Fthumbnail%2F%21400x300r%2Fgravity%2FCenter%2Fcrop%2F%21400x300%2Fquality%2F100',
        describe: ' 五彩张掖 精挑2选1一日游 （ 精品2-6人团穿越神秘峡谷+看丹霞日落＋瞻仰千年石窟+市区内酒店 /高铁西站免费接送+纯玩0购物）'
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
.item-img-wrapper
  overflow: hidden
  height: 0
  padding-bottom: 33.9%
  .item-img
    width: 100%
.item-info
  flex: 1
  padding: .1rem
  border-bottom: .01rem solid
  min-width: 0
  .item-title
    line-height: .54rem
    font-size: .32rem
    ellipsis()
  .item-desc
    line-height: .4rem
    color: #333333
    ellipsis()
</style>
