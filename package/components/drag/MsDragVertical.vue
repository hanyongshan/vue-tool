<template>
  <div class="ms-drag-vertical">
    <div class="ms-drag-vertical-content" :style="dragVerticalContentStyle"><slot></slot></div>
    <div class="ms-drag-vertical-drag" @mousedown.stop="dragMousedown">
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
  name: 'MsDragVertical',
  props: {
    innerHeight: { type: Number, required: false, default: 240 },
    innerMinHeight: { type: Number, required: false, default: 120 },
    innerMaxHeight: { type: Number, required: false, default: 360 },
  },
  data() {
    return {
      dragVerticalContentHeight: 0,
    };
  },
  created() {
    this.dragVerticalContentHeight = this.innerHeight;
  },
  mounted() {},
  computed: {
    dragVerticalContentStyle() {
      return `height: ${this.dragVerticalContentHeight}px;`;
    },
  },
  methods: {
    dragMousedown(event) {
      let mousedownY = event.clientY;
      document.onmousemove = event => {
        const mousemoveY = event.clientY;
        if (mousemoveY > mousedownY) {
          if (this.dragVerticalContentHeight >= this.innerMaxHeight) {
            this.dragVerticalContentHeight = this.innerMaxHeight;
            return;
          }
          this.dragVerticalContentHeight += mousemoveY - mousedownY;
        } else {
          if (this.dragVerticalContentHeight <= this.innerMinHeight) {
            this.dragVerticalContentHeight = this.innerMinHeight;
            return;
          }
          this.dragVerticalContentHeight -= mousedownY - mousemoveY;
        }
        mousedownY = mousemoveY;
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
.ms-drag-vertical {
  &-content {
    overflow: auto;
  }
  &-drag {
    display: flex;
    justify-content: center;
    height: 4px;
    background: #d1d6df;
    & > div {
      display: flex;
      justify-content: space-between;
      width: 15px;
      height: 4px;
      cursor: ns-resize;
      div {
        width: 3px;
        height: 4px;
        background: #9caac1;
      }
    }
  }
}
</style>
