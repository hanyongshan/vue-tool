<template>
  <el-select class="ms-select" :style="selectStyle" popper-class="ms-select-popper" v-model="selectValue" @visible-change="selectVisibleChange" @change="simpleCodeChange" :filter-method="simpleCodeFilterMethod" placeholder="请选择" :clearable="clearable" :disabled="disabled" filterable>
    <recycle-scroller pageMode :items="showSimpleCodeList" key-field="rid" :item-size="28" :buffer="2000" v-slot="{ item, active }">
      <el-option :key="item.codeNo" :label="item.codeName" :value="item.codeNo"></el-option>
    </recycle-scroller>
  </el-select>
</template>

<script>
export default {
  name: 'MsSelectSimple',
  props: {
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
    innerWidth: {
      type: [String, Number],
      require: false,
      default: '160',
    },
    value: {
      type: String,
      require: false,
      default: '',
    },
  },
  components: {},
  data() {
    return {
      selectValue: this.value,
      showSimpleCodeList: [],
      simpleCodeList: [],
    };
  },
  computed: {
    selectStyle() {
      return `width: ${this.innerWidth}${this.innerWidth.toString().indexOf('%') === -1 ? 'px' : ''}`;
    },
  },
  created() {
    // api发送请求获取列表源数据
    // this.$msApiCache.simpleCodeCacheValue(this, this.codeTypeCode, data => {
    //   this.simpleCodeList = data;
    //   this.showSimpleCodeList = data;
    // });
    this.simpleCodeList = [
      {
        rid: 101,
        codeNo: '101',
        codeName: '我是101',
      },
      {
        rid: 102,
        codeNo: '102',
        codeName: '我是102',
      },
      {
        rid: 103,
        codeNo: '103',
        codeName: '我是103',
      },
      {
        rid: 104,
        codeNo: '104',
        codeName: '我是104',
      },
      {
        rid: 105,
        codeNo: '105',
        codeName: '我是105',
      },
      {
        rid: 106,
        codeNo: '106',
        codeName: '我是106',
      },
    ];
    this.showSimpleCodeList = JSON.parse(JSON.stringify(this.simpleCodeList));
  },
  mounted() {},
  methods: {
    // 下拉显示与隐藏
    selectVisibleChange(visible) {
      if (visible) {
        this.showSimpleCodeList.splice(0, this.showSimpleCodeList.length);
        if (this.simpleCodeList.length === 0) return;
        this.showSimpleCodeList = JSON.parse(JSON.stringify(this.simpleCodeList));
      }
    },
    // 下拉改变事件
    simpleCodeChange() {
      this.$emit('update:input', this.selectValue);
      this.$emit('eventSimpleCodeChange');
    },
    // 获取选中的码表对象
    getSimpleCode() {
      if (!this.selectValue) return null;
      for (let i = 0, length = this.simpleCodeList.length; i < length; i++) {
        if (this.selectValue === this.simpleCodeList[i].codeNo) return this.simpleCodeList[i];
      }
      return null;
    },
    simpleCodeFilterMethod(query) {
      this.showSimpleCodeList.splice(0, this.showSimpleCodeList.length);
      for (let i = 0, length = this.simpleCodeList.length; i < length; i++) {
        if (query === undefined || query === null || query === '' || this.simpleCodeList[i].codeName.indexOf(query) !== -1) this.showSimpleCodeList.push(this.simpleCodeList[i]);
      }
      this.$forceUpdate();
    },
  },
  beforeDestroy() {
    this.simpleCodeList.splice(0, this.simpleCodeList.length);
    this.showSimpleCodeList.splice(0, this.showSimpleCodeList.length);
  },
};
</script>

<style lang="less" scoped></style>
