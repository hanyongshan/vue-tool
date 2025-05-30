<template>
  <div class="ms-drag-horizontal" ref="horizontalRef">
    <div class="ms-drag-horizontal-content" :style="`width: ${dragHorizontalContentWidth ? dragHorizontalContentWidth + 'px' : ''}`">
      <slot></slot>
    </div>
    <div class="ms-drag-horizontal-drag" @mousedown.stop="dragMousedown">
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MsDragHorizontal',
  props: {
    innerWidth: { type: Number, required: false, default: 0 },
    innerMinWidth: { type: Number, required: false, default: 0 },
    innerMaxWidth: { type: Number, required: false, default: 0 },
  },
  data() {
    return {
      dragHorizontalContentWidth: 0,
    };
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.dragHorizontalContentWidth = this.innerWidth;
      // 处理初始化内容超出父组件默认给填充宽度
      if (!this.dragHorizontalContentWidth && this.getHorizontalWidth() >= this.getHorizontalParentWidth()) {
        this.dragHorizontalContentWidth = this.getHorizontalParentWidth() - 4;
      }
    });
  },
  computed: {},
  methods: {
    dragMousedown(event) {
      let mousedownX = event.clientX;
      document.onmousemove = event => {
        const mousemoveX = event.clientX;
        if (mousemoveX > mousedownX) {
          if (this.innerMaxWidth && this.dragHorizontalContentWidth >= this.innerMaxWidth) {
            this.dragHorizontalContentWidth = this.innerMaxWidth;
            return;
          }

          // 无最大宽度时候判断拖拽超出父元素
          if (this.getHorizontalWidth() >= this.getHorizontalParentWidth()) {
            this.dragHorizontalContentWidth = this.getHorizontalParentWidth() - 4;
            return;
          }
          this.dragHorizontalContentWidth += mousemoveX - mousedownX;
        } else {
          if (this.innerMinWidth && this.dragHorizontalContentWidth <= this.innerMinWidth) {
            this.dragHorizontalContentWidth = this.innerMinWidth;
            return;
          }

          if (this.dragHorizontalContentWidth <= 0) {
            this.dragHorizontalContentWidth = 0.1;
            return;
          }
          this.dragHorizontalContentWidth -= mousedownX - mousemoveX;
        }
        mousedownX = mousemoveX;
      };
      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
      event.stopPropagation();
      event.preventDefault();
    },
    //获取组件元素的高
    getHorizontalWidth() {
      return this.$refs.horizontalRef && this.$refs.horizontalRef.clientWidth;
    },
    //获取上级元素的高
    getHorizontalParentWidth() {
      return this.$refs.horizontalRef.parentNode && this.$refs.horizontalRef.parentNode.clientWidth;
    },
  },
};
</script>

<style lang="less" scoped>
.ms-drag-horizontal {
  display: flex;
  height: 100%;
  &-content {
    height: 100%;
    overflow: auto;
  }
  &-drag {
    display: flex;
    align-items: center;
    width: 4px;
    height: 100%;
    background: #d1d6df;
    & > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 4px;
      height: 15px;
      cursor: ew-resize;
      div {
        width: 4px;
        height: 3px;
        background: #9caac1;
      }
    }
  }
}
</style>
