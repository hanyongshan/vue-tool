<!--  -->
<template>
  <div style="display:flex">
    <div style="flex:1">
      <div class="tip">纵向可拖动（无默认高度，最大，最小高度）</div>
      <div class="content">
        <div class="box">
          <ms-drag-vertical>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
          </ms-drag-vertical>
          <div class="box1">
            <div>我是下部分内容根据上部分内容自适应</div>
            <div>我是下部分内容根据上部分内容自适应</div>
            <div>我是下部分内容根据上部分内容自适应</div>
            <div>我是下部分内容根据上部分内容自适应</div>
            <div>我是下部分内容根据上部分内容自适应</div>
            <div>我是下部分内容根据上部分内容自适应</div>
            <div>我是下部分内容根据上部分内容自适应</div>
            <div>我是下部分内容根据上部分内容自适应</div>
          </div>
        </div>
      </div>
      <div class="tip">纵向可拖动（有默认高度，最大，最小高度）</div>
      <div class="content">
        <div class="box">
          <ms-drag-vertical
            :innerHeight="100"
            :innerMinHeight="50"
            :innerMaxHeight="300"
          >
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
            <div>上部分的内容</div>
          </ms-drag-vertical>
          <div class="box1">
            <div>我是下部分内容根据上部分内容自适应</div>
            <div>我是下部分内容根据上部分内容自适应</div>
            <div>我是下部分内容根据上部分内容自适应</div>
            <div>我是下部分内容根据上部分内容自适应</div>
            <div>我是下部分内容根据上部分内容自适应</div>
            <div>我是下部分内容根据上部分内容自适应</div>
            <div>我是下部分内容根据上部分内容自适应</div>
            <div>我是下部分内容根据上部分内容自适应</div>
          </div>
        </div>
      </div>
    </div>
    <div style="flex:1">
      <div class="tip">横向可拖动(无默认宽度，最大，最小宽度)</div>
      <div class="content">

        <div class="wrap">
          <ms-drag-horizontal>
            <div>我是左边的内容我是左边的内容我是左边的内容我是左边的内容我是左边的内容我是左边的内容我是左边的内容</div>
          </ms-drag-horizontal>
          <div class="wrap1">
            我是右边内容我是右边内容我是右边内容我是右边内容我是右边内容我是右边内容
          </div>
        </div>
      </div>
      <div class="tip">横向可拖动(有默认宽度，最大，最小宽度)</div>
      <div class="content">

        <div class="wrap">
          <ms-drag-horizontal
            :innerWidth="100"
            :innerMinWidth="50"
            :innerMaxWidth="300"
          >
            <div>我是左边的内容我是左边的内容我是左边的内容我是左边的内容我是左边的内容我是左边的内容我是左边的内容</div>
          </ms-drag-horizontal>
          <div class="wrap1">
            我是右边内容我是右边内容我是右边内容我是右边内容我是右边内容我是右边内容
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  // import引入的组件需要注入到对象中才能使用
  name: 'DragIndex',
  components: {},
  data() {
    // 这里存放数据
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
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
.box {
  width: 300px;
  display: flex;
  height: 500px;
  border: 1px solid #000;
  flex-direction: column;
  .box1 {
    flex: 1;
    overflow: auto;
  }
}
.wrap {
  width: 500px;
  height: 300px;
  display: flex;
  border: 1px solid #000;
  .wrap1 {
    flex: 1;
    overflow: auto;
  }
}
</style>