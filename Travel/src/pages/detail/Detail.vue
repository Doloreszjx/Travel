<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/banner'
import DetailHeader from './components/header'
import DetailList from './components/list'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [{
        title: '成人票',
        children: [{
          title: '成人特惠一区'
        }, {
          title: '成人特惠二区'
        }]
      }, {
        title: '儿童票'
      }, {
        title: '老人票'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.content
  height: 50rem
</style>
