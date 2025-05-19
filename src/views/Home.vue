<template>
  <div class='home'>
    <div @click="go('/button')">我是按钮</div>
    <div>按钮</div>
    <div>按钮</div>
    <div>按钮</div>
  </div>
</template>

<script>
export default {
  // import引入的组件需要注入到对象中才能使用
  name: "HomeIndex",
  components: {},
  data() {
    // 这里存放数据
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    go(path) {
      this.$router.push(path);
    },
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {}, // 生命周期 - 销毁之前
  destroyed() {}, // 生命周期 - 销毁完成
  activated() {}, // 如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less' scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 200px;
    text-align: center;
    line-height: 30px;
    height: 30px;
    border: 1px solid;
    margin: 5px;
    cursor: pointer;
  }
}
</style>