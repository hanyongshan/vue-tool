<!-- 单个日期组件 -->
<template>
  <el-date-picker
    ref="dateRef"
    class="ms-date-picker"
    :style="dateRangePickerStyle"
    popper-class="ms-date-picker-popper"
    v-model="value"
    :type="type"
    :format="sformat"
    :value-format="vvformat"
    placement="bottom-start"
    placeholder="请选择"
    :clearable="clearable"
    :disabled="disabled"
    :editable="false"
  ></el-date-picker>
</template>

<script>
export default {
    // import引入的组件需要注入到对象中才能使用
    name: 'MsDatePicker',
    model: {
        prop: 'date',
        event: 'change',
    },
    props: {
        innerWidth: { type: [String, Number], required: false, default: '200' },
        clearable: { type: Boolean, required: false, default: true },
        disabled: { type: Boolean, required: false, default: false },
        type: { type: String, required: false, default: 'date' },
        format: { type: String, required: false, default: '' },
        vformat: { type: String, required: false, default: 'yyyy-MM-dd' },
        date: { type: String, required: false, default: '' },
    },
    components: {},
    data() {
        // 这里存放数据
        return {
            value: this.date,
            sformat: '',
            vvformat: '',
        };
    },
    computed: {
        dateRangePickerStyle() {
            return `width: ${this.innerWidth}${
                this.innerWidth.toString().indexOf('%') === -1 ? 'px' : ''
            } !important;`;
        },
    },
    watch: {
        format: {
            handler(value) {
                if (!value) {
                    this.sformat = this.type === 'datetime' ? 'yyyy-MM-dd HH:mm:ss' : 'yyyy-MM-dd';
                } else {
                    this.sformat = value;
                }
            },
            immediate: true,
        },
    },
    methods: {},
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {},
    // 生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
        this.$refs.dateRef.popperOptions.boundariesElement = document.querySelector('#app');
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