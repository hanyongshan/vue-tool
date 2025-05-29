<template>
  <div class="ms-scrollbar-x">
    <el-scrollbar class="ms-scrollbar-box-x">
      <slot />
    </el-scrollbar>
  </div>
</template>

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

<style lang="less" scoped></style>

<style lang="less">
.ms-scrollbar-x .ms-scrollbar-box-x {
  white-space: nowrap;

  .el-scrollbar__wrap {
    margin-right: 0;
    overflow: scroll;
  }

  .el-scrollbar__bar.is-horizontal {
    height: 8px;
    pointer-events: none;
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
</style>
