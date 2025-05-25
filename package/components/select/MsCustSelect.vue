<!--  -->
<template>
  <el-popover
    class="ms-popover-select"
    popper-class="ms-popover"
    ref="popoverRef"
    placement="bottom"
    v-model="visible"
    trigger="click"
    :disabled="disabled"
    :popper-options="boundaries"
  >
    <div :style="`width:${width}px`">
      <!-- 自定义需要展示的选项内容-->
      <div
        class="select-item"
        v-for="(item,idx) in selectOptions"
        :key="idx"
        @click="eventSelect(item)"
      >{{item.label}}</div>
    </div>
    <el-input
      class="ms-input"
      slot="reference"
      :style="`width:${width}px`"
      v-model="selectValue"
      placeholder="请选择"
      :disabled="disabled"
      readonly
      :clearable="clearable"
    >
      <i
        slot="suffix"
        :class="`select-icon el-icon-arrow-up ${visible ? 'is-reverse' :''} ${!disabled && selectValue  && clearable ? 'is-clearable':''}`"
        @click="eventclear"
      ></i>
    </el-input>
  </el-popover>
</template>

<script>
export default {
  // import引入的组件需要注入到对象中才能使用
  name: 'MsCustSelect',
  props: {
    innerWidth: {
      type: [String, Number],
      require: false,
      default: 200,
    },
    disabled: {
      type: Boolean,
      require: false,
      default: false,
    },
    clearable: {
      type: Boolean,
      require: false,
      default: true,
    },
  },
  components: {},
  data() {
    // 这里存放数据
    return {
      selectValue: '',
      visible: false,
      boundaries: null,
      selectOptions: [
        {
          value: '选项1',
          label: '黄金糕',
        },
        {
          value: '选项2',
          label: '双皮奶',
        },
        {
          value: '选项3',
          label: '蚵仔煎',
        },
        {
          value: '选项4',
          label: '龙须面',
        },
        {
          value: '选项5',
          label: '北京烤鸭',
        },
      ],
    };
  },
  computed: {
    width() {
      return parseFloat(this.innerWidth);
    },
  },
  watch: {},
  methods: {
    eventSelect(item) {
      this.selectValue = item.label;
      this.visible = false;
    },
    eventclear(e) {
      if (!this.disabled && this.selectValue && this.clearable) {
        this.selectValue = '';
        //清除按钮点击后，阻止后续的打开选项列表事件
        e.stopPropagation();
      }
    },
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.boundaries = { boundariesElement: document.querySelector('#app') };
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
.select-icon {
  transition: all 0.5s;
}
.is-reverse {
  transform: rotate(180deg);
}
.select-item {
  width: 100%;
  height: 28px;
  line-height: 28px;
  padding: 0 5px;
  cursor: pointer;
  &:hover {
    background: #c6cfde;
  }
}

// 下面样式已经在全部less中设置过了，在此以辅助解读
//下拉选存在值时，设置鼠标悬浮出现清除按钮
.ms-popover-select .ms-input:hover .el-input__suffix .el-icon-arrow-up.is-clearable::before {
  content: '' !important;
}
.ms-popover-select .ms-input:hover .el-input__suffix .el-icon-arrow-up.is-clearable {
  line-height: 26px;
  transition: none !important;
}
</style>