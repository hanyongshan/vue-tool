
<template>
  <div class='data-picker'>
      <div class="tip">简单选择日期组件</div>
          <div class="content">
      <el-date-picker ref="datePicker" class="ms-date-picker" popper-class="ms-date-picker-popper" v-model="value" format="yyyy-MM-dd" value-format="yyyy-MM-dd" type="date" placement="bottom-start" placeholder="选择日期" clearable></el-date-picker>
  </div>

  
  </div>
</template>

<script>



export default {
  // import引入的组件需要注入到对象中才能使用
  name: "DatePicker",
  components: {},
  data() {
    // 这里存放数据
    return {
      value:''
    };
  },
  computed: {},
  watch: {},
  methods: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // 下拉框显示不全修复
    this.$refs.datePicker.popperOptions.boundariesElement = document.querySelector('#app')
  },
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