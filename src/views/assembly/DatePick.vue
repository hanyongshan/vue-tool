
<template>
  <div class='data-picker'>
    <div class="tip">年-月-日</div>
    <div class="content">
      <ms-date-picker></ms-date-picker>
    </div>

    <div class="tip">年-月-日</div>
    <div class="content">
      <ms-date-picker
        type="year"
        v-model="date"
      ></ms-date-picker>
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
            date: '',
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