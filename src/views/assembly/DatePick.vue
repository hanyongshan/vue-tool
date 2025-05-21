<template>
  <div class="data-picker">
    <div class="tip">简单选择日期组件</div>
    <div class="content">
      <el-date-picker ref="datePicker" class="ms-date-picker" popper-class="ms-date-picker-popper" v-model="value" format="yyyy-MM-dd" value-format="yyyy-MM-dd" type="date" placement="bottom-start" placeholder="选择日期" clearable></el-date-picker>
    </div>

    <el-divider>以下为时间组件(类型适用于date和datetime)</el-divider>
    <div class="tip">日期选择器-区间组件(开始日期小于结束日期)</div>
    <div class="content">
      <div>年月日(默认可选日期不超过今天，可通过参数limitDateNow控制)</div>
      <ms-date-range ref="dateRangeRef" @eventDateChange="eventDateChange"></ms-date-range>

      <div style="margin-top: 10px">年月日时分秒(是否显示秒可通过参数ifSeconds控制,默认显示当前周)</div>
      <ms-date-range ref="dateRangeRef1" :innerWidth="200" type="datetime"></ms-date-range>

      <div style="margin-top: 10px">年月日时分秒(显示秒)</div>
      <ms-date-range :innerWidth="200" type="datetime" :ifSeconds="false"></ms-date-range>
    </div>
  </div>
</template>

<script>
export default {
  // import引入的组件需要注入到对象中才能使用
  name: 'DatePicker',
  components: {},
  data() {
    // 这里存放数据
    return {
      value: '',
    };
  },
  computed: {},
  watch: {},
  methods: {
    eventDateChange() {
      console.log(this.$refs.dateRangeRef.getDateStart());
      console.log(this.$refs.dateRangeRef.getDateEnd());
    },
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // 下拉框显示不全修复
    this.$refs.datePicker.popperOptions.boundariesElement = document.querySelector('#app');
    let startDate = this.$msSystem.formatDate(new Date(), 'YYYY-MM-DD', 7, 'days');
    let endDate = this.$msSystem.formatDate(new Date(), 'YYYY-MM-DD');
    this.$refs.dateRangeRef1.setDate(startDate, endDate);
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
<style lang="less" scoped>
// @import url(); 引入公共css类
</style>
