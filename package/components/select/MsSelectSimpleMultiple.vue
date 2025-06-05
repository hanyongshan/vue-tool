<template>
  <el-tooltip :content="tooltip" placement="top-start" :enterable="false" :disabled="tooltip.trim() === ''">
    <el-select ref="msSelectRef" class="ms-select" :style="selectStyle" popper-class="ms-select-popper" v-model="codeNoList" @visible-change="selectVisibleChange" @change="simpleCodeListChange" :filter-method="simpleCodeFilterMethod" :placeholder="placeholder" :clearable="clearable" :disabled="disabled" filterable multiple :collapse-tags="false">
      <recycle-scroller pageMode :items="showSimpleCodeList" key-field="codeNo" :item-size="28" :buffer="2000" v-slot="{ item, active }">
        <el-option v-if="active" :key="item.codeNo" :label="item.codeName" :value="item.codeNo"></el-option>
      </recycle-scroller>
    </el-select>
  </el-tooltip>
</template>

<script>
export default {
  name: 'MsSelectSimpleMultiple',
  props: {
    innerWidth: { type: [String, Number], required: false, default: '160' },
    placeholder: { type: String, required: false, default: '' },
    clearable: { type: Boolean, required: false, default: true },
    disabled: { type: Boolean, required: false, default: false },
    excludeCodeNoList: { type: Array, required: false }, //指定去除的集合
    defaultCodeNoList: { type: Array, required: false }, //默认显示的集合
  },
  data() {
    return {
      simpleCodeList: [],
      showSimpleCodeList: [],
      codeNoList: [],
      echoCodeNoList: [],
      tooltip: '',
    };
  },
  created() {
    for (let i = 0, length = this.defaultCodeNoList !== undefined ? this.defaultCodeNoList.length : 0; i < length; i++) {
      this.echoCodeNoList.push(this.defaultCodeNoList[i]);
    }
    // this.$msApiCache.simpleCodeCacheValue(this, this.codeTypeCode, this.simpleCodeCacheValueSuccess);
    this.simpleCodeCacheValueSuccess([
      {
        rid: '172',
        modifyTime: '2019-06-05 08:20:00',
        ifDelete: false,
        codeTypeCode: '1007',
        codeName: '未婚',
        codeNo: '10070001',
        codeLevelNo: '10070001',
        standardCode: '',
        ifEnable: true,
        codeTypeName: '婚姻状况',
      },
      {
        rid: '174',
        modifyTime: '2019-06-05 08:20:00',
        ifDelete: false,
        codeTypeCode: '1007',
        codeName: '已婚',
        codeNo: '10070002',
        codeLevelNo: '10070002',
        standardCode: '',
        ifEnable: true,
        codeTypeName: '婚姻状况',
      },
      {
        rid: '176',
        modifyTime: '2019-06-05 08:20:00',
        ifDelete: false,
        codeTypeCode: '1007',
        codeName: '丧偶',
        codeNo: '10070003',
        codeLevelNo: '10070003',
        standardCode: '',
        ifEnable: true,
        codeTypeName: '婚姻状况',
      },
      {
        rid: '178',
        modifyTime: '2022-06-17 16:13:39',
        ifDelete: false,
        codeTypeCode: '1007',
        codeName: '离异',
        codeNo: '10070004',
        codeLevelNo: '10070004',
        standardCode: '',
        ifEnable: true,
        codeTypeName: '婚姻状况',
      },
      {
        rid: '180',
        modifyTime: '2023-07-20 09:11:01',
        ifDelete: false,
        codeTypeCode: '1007',
        codeName: '未说明的婚姻状况',
        codeNo: '10070005',
        codeLevelNo: '10070005',
        standardCode: '',
        ifEnable: true,
        codeTypeName: '婚姻状况',
      },
    ]);
  },
  mounted() {},
  watch: {
    codeNoList: {
      handler(newCodeNoList) {
        const codeNameList = [];
        for (let i = 0, length = this.simpleCodeList.length; i < length; i++) {
          const index = newCodeNoList.findIndex(codeNo => {
            return codeNo === this.simpleCodeList[i].codeNo;
          });
          if (index === -1) continue;
          codeNameList.push(this.simpleCodeList[i].codeName);
        }
        this.tooltip = [...new Set(codeNameList)].join('、');
      },
      deep: true,
      immediate: true,
    },
  },
  computed: {
    selectStyle() {
      return `width: ${this.innerWidth}${this.innerWidth.toString().indexOf('%') === -1 ? 'px' : ''} !important;`;
    },
  },
  methods: {
    // 下拉显示与隐藏
    selectVisibleChange(visible) {
      // 根据当前选中内容，处理showSimpleCodeList
      if (visible) this.dealShowSimpleCodeList();
    },
    // 查询过滤
    simpleCodeFilterMethod(query) {
      this.showSimpleCodeList.splice(0, this.showSimpleCodeList.length);
      for (let i = 0, length = this.simpleCodeList.length; i < length; i++) {
        const pyxName = this.$msBases.pyCamelChars(this.simpleCodeList[i].codeName);
        if (query === undefined || query === null || query === '' || this.simpleCodeList[i].codeName.indexOf(query) !== -1 || pyxName.toUpperCase().indexOf(query.toUpperCase()) !== -1) this.showSimpleCodeList.push(this.simpleCodeList[i]);
      }
      this.$forceUpdate();
    },
    // 获取码表数据成功
    simpleCodeCacheValueSuccess(simpleCodeList) {
      this.simpleCodeList.splice(0, this.simpleCodeList.length);
      for (let i = 0, length = simpleCodeList.length; i < length; i++) {
        if (this.excludeCodeNoList === undefined || this.excludeCodeNoList.indexOf(simpleCodeList[i].codeNo) === -1) this.simpleCodeList.push(simpleCodeList[i]);
      }
      // 触发回显显示
      this.echoCodeNoListToCodeNoList();
      // 根据当前选中内容，处理showSimpleCodeList
      this.dealShowSimpleCodeList();
    },
    // 触发回显显示
    echoCodeNoListToCodeNoList() {
      if (this.codeNoList.length) {
        this.$refs.msSelectRef.$el.querySelectorAll('.el-tag').forEach(el => {
          el?.remove();
        });
      }
      this.codeNoList.splice(0, this.codeNoList.length);
      if (this.echoCodeNoList === undefined || this.echoCodeNoList.length === 0) return;
      if (this.simpleCodeList.length === 0) return;
      const tempDataList = [];
      const codeNoList = [];
      for (let i = 0, length = this.simpleCodeList.length; i < length; i++) {
        const index = this.echoCodeNoList.findIndex(echoCodeNo => {
          return echoCodeNo === this.simpleCodeList[i].codeNo;
        });
        if (index === -1) continue;
        codeNoList.push(this.echoCodeNoList[index]);
        tempDataList.push(this.simpleCodeList[i]);
      }
      this.$nextTick(() => this.codeNoList.push(...codeNoList));
      if (tempDataList.length === 0) return;
      this.simpleCodeList.unshift(...tempDataList);
      this.$nextTick(() => this.simpleCodeList.splice(0, tempDataList.length));
    },
    // 根据当前选中内容，处理showSimpleCodeList
    dealShowSimpleCodeList() {
      this.showSimpleCodeList.splice(0, this.showSimpleCodeList.length);
      if (this.simpleCodeList.length === 0) return;
      for (let i = 0, length = this.simpleCodeList.length; i < length; i++) {
        this.showSimpleCodeList.push(this.simpleCodeList[i]);
      }
    },
    // 下拉改变事件
    simpleCodeListChange() {
      this.$emit('eventSimpleCodeListChange');
    },
    // 设置回显codeNoList
    setEchoCodeNoList(echoCodeNoList) {
      this.echoCodeNoList.splice(0, this.echoCodeNoList.length);
      for (let i = 0, length = echoCodeNoList !== undefined ? echoCodeNoList.length : 0; i < length; i++) {
        this.echoCodeNoList.push(echoCodeNoList[i]);
      }
      // 触发回显显示
      this.echoCodeNoListToCodeNoList();
      // 根据当前选中内容，处理showSimpleCodeList
      this.dealShowSimpleCodeList();
    },
    // 获取选中的码表集合
    getSimpleCodeList() {
      if (this.codeNoList === undefined || this.codeNoList.length === 0) return [];
      const simpleCodeList = [];
      for (let i = 0, length = this.simpleCodeList.length; i < length; i++) {
        const index = this.codeNoList.findIndex(codeNo => {
          return codeNo === this.simpleCodeList[i].codeNo;
        });
        if (index === -1) continue;
        simpleCodeList.push(this.simpleCodeList[i]);
      }
      return simpleCodeList;
    },
  },
  beforeDestroy() {
    this.simpleCodeList.splice(0, this.simpleCodeList.length);
    this.showSimpleCodeList.splice(0, this.showSimpleCodeList.length);
    this.codeNoList.splice(0, this.codeNoList.length);
    this.echoCodeNoList.splice(0, this.echoCodeNoList.length);
  },
};
</script>

<style lang="less" scoped></style>
