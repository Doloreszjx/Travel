<template>
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img :src="item.imgUrl"/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data: function () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '001',
        imgUrl: 'http://gtd.alicdn.com/bao/uploaded///img.alicdn.com/bao/uploaded/i3/152460263101771032/TB2_rTTtVXXXXcGXpXXXXXXXXXX_!!0-travel.jpg'
      }, {
        id: '002',
        imgUrl: 'http://gtd.alicdn.com/bao/uploaded///img.alicdn.com/bao/uploaded/i1/152460263101675983/TB2WuwNtVXXXXaoXXXXXXXXXXXX_!!0-travel.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  overflow : hidden
  width: 100%
  height: 0
  padding-bottom: 21.3%
  background-color : #eee
  img
    width: 100%
    height: 3.2rem
</style>
