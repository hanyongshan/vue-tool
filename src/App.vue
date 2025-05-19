<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="less">
#app {
  overflow: auto;
}
.tip {
  font-size: 20px;
  line-height: 30px;
  padding: 5px 10px;
}
.content {
  padding: 10px;
}
</style>
