<template>
  <div class="ms-drag-vertical" ref="verticalRef">
    <div class="ms-drag-vertical-content" :style="`height: ${dragVerticalContentHeight !== 0 ? dragVerticalContentHeight + 'px' : 'auto'}`">
      <slot></slot>
    </div>
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
// 可拖拉组件用法：
// innerHeight：设置默认高度，不传则默认自适应
// innerMinHeight：设置最小高度，可传可不传
// innerMaxHeight：设置最大高度，可传可不传

export default {
  name: 'MsDragVertical',
  props: {
    innerHeight: { type: Number, required: false, default: 0 },
    innerMinHeight: { type: Number, required: false, default: 0 },
    innerMaxHeight: { type: Number, required: false, default: 0 },
  },
  data() {
    return {
      dragVerticalContentHeight: 0,
    };
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.dragVerticalContentHeight = this.innerHeight;
      // 处理初始化内容超出父组件默认给填充高度
      if (!this.dragVerticalContentHeight && this.getVerticalHeight() >= this.getVerticalParentHeight()) {
        this.dragVerticalContentHeight = this.getVerticalParentHeight() - 4;
      }
    });
  },
  computed: {},
  methods: {
    dragMousedown(event) {
      let mousedownY = event.clientY;
      document.onmousemove = event => {
        const mousemoveY = event.clientY;
        if (mousemoveY > mousedownY) {
          // 有最大高度时候判断
          if (this.innerMaxHeight !== 0 && this.dragVerticalContentHeight >= this.innerMaxHeight) {
            this.dragVerticalContentHeight = this.innerMaxHeight;
            return;
          }
          // 无最大高度时候判断，拖拽超出父元素高度，将高度变为填充满高度
          if (this.getVerticalHeight() >= this.getVerticalParentHeight()) {
            this.dragVerticalContentHeight = this.getVerticalParentHeight() - 4;
            return;
          }
          this.dragVerticalContentHeight += mousemoveY - mousedownY;
        } else {
          if (this.innerMinHeight !== 0 && this.dragVerticalContentHeight <= this.innerMinHeight) {
            this.dragVerticalContentHeight = this.innerMinHeight;
            return;
          }
          // 缩小高度时候设置能缩小最小高度为0.1，不能为0，如果子元素本身高度高于父元素，为0时候会自适应高度
          if (this.dragVerticalContentHeight <= 0) {
            this.dragVerticalContentHeight = 0.1;
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
    //获取组件元素的高
    getVerticalHeight() {
      return this.$refs.verticalRef && this.$refs.verticalRef.clientHeight;
    },
    //获取上级元素的高
    getVerticalParentHeight() {
      return this.$refs.verticalRef.parentNode && this.$refs.verticalRef.parentNode.clientHeight;
    },
  },
};
</script>

<style lang="less" scoped>
.ms-drag-vertical {
  width: 100%;
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
