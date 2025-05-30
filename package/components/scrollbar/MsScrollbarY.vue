<template>
  <div class="ms-scrollbar-y">
    <el-scrollbar class="ms-scrollbar-box-y" ref="scrollbarYRef">
      <slot />
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  name: 'MsScrollbarY',
  data() {
    return {
      top: 0,
    };
  },
  created() {},
  mounted() {
    if (!this.$refs.scrollbarYRef) return;
    this.$refs.scrollbarYRef.wrap.onscroll = this.scroll;
  },
  activated() {
    this.scrollTop(this.top);
  },
  computed: {},
  methods: {
    scroll() {
      this.top = (this.$refs.scrollbarYRef && this.$refs.scrollbarYRef.wrap.scrollTop) || 0;
      this.$emit('scrollTop', this.top);
    },
    scrollTop(top) {
      this.$nextTick(() => {
        if (!this.$refs.scrollbarYRef) return;
        if (top < 0) {
          this.$refs.scrollbarYRef.moveY = 0;
          this.$refs.scrollbarYRef.wrap.scrollTop = 0;
        } else {
          this.$refs.scrollbarYRef.wrap.scrollTop = top;
        }
      });
    },
    // 获取滚动距离
    getTop() {
      return this.top;
    },
  },
};
</script>

<style lang="less" scoped>
.ms-scrollbar-y {
  height: 100%;
  /deep/ .ms-scrollbar-box-y {
    height: 100%;
    .el-scrollbar__wrap {
      height: 100%;
      margin-bottom: 0;
      overflow: scroll;
      overflow-x: hidden;
    }
    .el-scrollbar__bar.is-vertical {
      z-index: 99;
      width: 8px;
      pointer-events: none;
      right: 1px;
    }
    .el-scrollbar__bar.is-horizontal {
      display: none;
      pointer-events: none;
    }
    .el-scrollbar__thumb {
      pointer-events: auto;
      cursor: default;
      background-color: #979797;
      border-radius: 3px;
      &:hover,
      &:active {
        background-color: #979797;
      }
    }
  }
}
</style>

<style lang="less"></style>
