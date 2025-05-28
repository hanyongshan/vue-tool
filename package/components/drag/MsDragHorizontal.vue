<template>
  <div class="ms-drag-horizontal">
    <div class="ms-drag-horizontal-content" :style="dragHorizontalContentStyle"><slot></slot></div>
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
    innerWidth: { type: Number, required: false, default: 240 },
    innerMinWidth: { type: Number, required: false, default: 120 },
    innerMaxWidth: { type: Number, required: false, default: 360 },
  },
  data() {
    return {
      dragHorizontalContentWidth: 0,
    };
  },
  created() {
    this.dragHorizontalContentWidth = this.innerWidth;
  },
  mounted() {},
  computed: {
    dragHorizontalContentStyle() {
      return `width: ${this.dragHorizontalContentWidth}px;`;
    },
  },
  methods: {
    dragMousedown(event) {
      let mousedownX = event.clientX;
      document.onmousemove = event => {
        const mousemoveX = event.clientX;
        if (mousemoveX > mousedownX) {
          if (this.dragHorizontalContentWidth >= this.innerMaxWidth) {
            this.dragHorizontalContentWidth = this.innerMaxWidth;
            return;
          }
          this.dragHorizontalContentWidth += mousemoveX - mousedownX;
        } else {
          if (this.dragHorizontalContentWidth <= this.innerMinWidth) {
            this.dragHorizontalContentWidth = this.innerMinWidth;
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
