<!--  -->
<template>
  <div class="">
    <div class="tip">自定义下拉选（el-popover）</div>
    <div class="content">
      <ms-cust-select v-model="value" innerWidth="300px"></ms-cust-select>
    </div>

    <div class="tip">简单单选下拉组件（el-select + recycle-scroller）,用于处理滚动项很多卡顿问题</div>
    <div class="content">
      <ms-select-simple ref="selectSimple" v-model="defaultValue" @eventSimpleCodeChange="eventSimpleCodeChange"></ms-select-simple>
    </div>
  </div>
</template>

<script>
export default {
  // import引入的组件需要注入到对象中才能使用
  name: 'SelectIndex',
  components: {},
  data() {
    // 这里存放数据
    return {
      value: '双皮奶',
      defaultValue: '102',
    };
  },
  computed: {},
  watch: {
    value(v) {
      console.log('选中的值', v);
    },
  },
  methods: {
    eventSimpleCodeChange() {
      console.log('获取选中的对象', this.$refs.selectSimple.getSimpleCode());
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
<style lang="less" scoped>
// @import url(); 引入公共css类
</style>
