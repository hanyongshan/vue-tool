<template>
  <div style="display: flex">
    <div>
      <div>纵向滚动条</div>
      <div class="box">
        <ms-scrollbar-y>
          <div class="box-c"></div>
        </ms-scrollbar-y>
      </div>
    </div>

    <div>
      <div>横向滚动条</div>
      <div class="box1">
        <ms-scrollbar-x>
          <div class="box1-c"></div>
        </ms-scrollbar-x>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScrollbarIndex',
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.box {
  width: 500px;
  height: 500px;
  border: 1px solid #000;
  box-sizing: border-box;
  &-c {
    width: 100%;
    height: 800px;
  }
}
.box1 {
  width: 500px;
  height: 500px;
  border: 1px solid #000;
  box-sizing: border-box;

  &-c {
    width: 800px;
    height: 100%;
  }
}
</style>
