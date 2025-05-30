<template>
  <div class="ms-scrollbar-x">
    <el-scrollbar class="ms-scrollbar-box-x">
      <slot />
    </el-scrollbar>
  </div>
</template>
/* 横向滚动条默认100%父节点宽高，slot里面的内容高度可以100%，也可以自定义，不出纵向滚动条 */
<script>
export default {
  name: 'MsScrollbarX',
  data() {
    return {};
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {},
};
</script>

<style lang="less" scoped>
.ms-scrollbar-x {
  width: 100%;
  height: 100%;
  /deep/ .ms-scrollbar-box-x {
    width: 100%;
    height: 100%;
    white-space: nowrap;

    .el-scrollbar__wrap {
      width: 100%;
      height: 100%;
      margin-right: 0;
      overflow: hidden;

      .el-scrollbar__view {
        height: 100%;
      }
    }
    .el-scrollbar__bar.is-horizontal {
      height: 8px;
      pointer-events: none;
      bottom: 1px;
    }

    .el-scrollbar__bar.is-vertical {
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
