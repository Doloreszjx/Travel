<template>
  <div class="wrapper">
    <swiper :options="swiperOptions" v-if="showSwiper">
      <swiper-slide v-for="item in list" :key="item.id">
        <img :src="item.imgUrl"/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data: function () {
    return {
      swiperOptions: {
        autoplay: 3000,
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  overflow : hidden
  width: 100%
  height: 0
  padding-bottom: 35.12%
  background-color : #eee
  img
    width: 100%
    height: 3.2rem
</style>
