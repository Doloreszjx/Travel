
<template>
  <div id="app">
<!--显示的是当前地址的内容-->
<!--    路由加载过一次后，保存在本地内存中。下载加载时不需要重新再加载-->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
