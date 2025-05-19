<!-- 按钮组建 -->
<template>
  <div class='ms-button'>
    <el-button :type="type">
      <slot></slot>
    </el-button>
  </div>
</template>

<script>
export default {
  // import引入的组件需要注入到对象中才能使用
  name: "MsButton",
  components: {},
  props: {
    type: {
      type: String,
      default: "primary",
    },
  },
  data() {
    // 这里存放数据
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
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
// @import url(); 引入公共css类
</style>