<template>
  <div>
    <div class="tip">输入框、文本域</div>
    <div class="content">
      <el-input class="ms-input" v-model="input" placeholder="请输入" clearable></el-input><br />
      <el-input class="ms-textarea" type="textarea" v-model="inputTextarea" placeholder="请输入"></el-input>
    </div>
    <div class="tip">输入框-后接按钮</div>
    <div class="content">
      <el-input class="ms-input ms-input-append-button" v-model="input" placeholder="" clearable>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <div class="tip">输入框-前后缀文字</div>
    <div class="content">
      <el-input class="ms-input ms-input-composite" v-model="input" placeholder="">
        <template slot="prepend">每月</template>
        <template slot="append">个</template>
      </el-input>
    </div>
    <div class="tip">输入框-前缀下拉后缀文字</div>
    <div class="content">
      <el-input class="ms-input ms-input-composite composite-select--prepend" v-model="input" placeholder="">
        <el-select class="ms-select" popper-class="ms-select-popper" style="width: 44px !important" slot="prepend" v-model="value" placeholder="">
          <el-option v-for="item in itemList" :key="item.no" :label="item.name" :value="item.no"></el-option>
        </el-select>
        <template slot="append">个</template>
      </el-input>
    </div>
    <div class="tip">输入框-前缀文字后缀下拉</div>
    <div class="content">
      <el-input class="ms-input ms-input-composite composite-select--append" v-model="input" placeholder="">
        <template slot="prepend">每月</template>
        <el-select class="ms-select" popper-class="ms-select-popper" style="width: 44px !important" slot="append" v-model="value" placeholder="">
          <el-option v-for="item in itemList" :key="item.no" :label="item.name" :value="item.no"></el-option>
        </el-select>
      </el-input>
    </div>
    <el-divider></el-divider>
    <div class="tip">单选</div>
    <div class="content">
      <el-radio-group class="ms-radio-group" v-model="radio">
        <el-radio class="ms-radio" label="1" border>选项1</el-radio>
        <el-radio class="ms-radio" label="2" border>选项2</el-radio>
        <el-radio class="ms-radio" label="1" border disabled>选项禁选1</el-radio>
        <el-radio class="ms-radio" label="2" border disabled>选项禁选2</el-radio>
      </el-radio-group>
      <div>
        <el-radio class="ms-radio" v-model="radio" label="1">选项1</el-radio>
        <el-radio class="ms-radio" v-model="radio" label="2">选项2</el-radio>
        <el-radio class="ms-radio" v-model="radio" label="1" disabled>选项禁选1</el-radio>
        <el-radio class="ms-radio" v-model="radio" label="2" disabled>选项禁选2</el-radio>
      </div>
    </div>
    <div class="tip">单选按钮切换</div>
    <div class="content">
      <el-radio-group v-model="radio" class="ms-radio-group-switch">
        <el-radio-button label="选项1" class="ms-radio-switch"></el-radio-button>
        <el-radio-button label="选项2" class="ms-radio-switch"></el-radio-button>
      </el-radio-group>
    </div>

    <div class="tip">单选按钮组</div>
    <div class="content">
      <el-radio-group class="ms-radio-button-group" v-model="radio">
        <el-radio-button label="1">男</el-radio-button>
        <el-radio-button label="2">女</el-radio-button>
      </el-radio-group>
    </div>
    <el-divider></el-divider>
    <div class="tip">复选框</div>
    <div class="content">
      <el-checkbox-group v-model="checkList">
        <el-checkbox class="ms-checkbox" label="1">选项1</el-checkbox>
        <el-checkbox class="ms-checkbox" label="2">选项2</el-checkbox>
        <el-checkbox class="ms-checkbox" label="1" disabled>选项禁选1</el-checkbox>
        <el-checkbox class="ms-checkbox" label="2" disabled>选项禁选2</el-checkbox>
      </el-checkbox-group>
      <el-checkbox-group v-model="checkList">
        <el-checkbox class="ms-checkbox" label="1" border>选项1</el-checkbox>
        <el-checkbox class="ms-checkbox" label="2" border>选项2</el-checkbox>
      </el-checkbox-group>
    </div>
    <el-divider></el-divider>
    <div class="tip">下拉选</div>
    <div class="content">
      <el-select class="ms-select" popper-class="ms-select-popper" v-model="value" placeholder="请选择" clearable>
        <el-option v-for="item in itemList" :key="item.no" :label="item.name" :value="item.no"></el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputIndex',
  components: {},
  data() {
    return {
      input: '',
      inputTextarea: '',
      value: '',
      itemList: [
        { no: '1000', name: '个' },
        { no: '1001', name: '组' },
      ],

      radio: '',

      checkList: [],
    };
  },
};
</script>

<style lang="less" scoped></style>
