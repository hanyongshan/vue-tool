<!--  -->
<template>
  <div>
    <div class="tip">主要按钮(高度28)</div>
    <div class="content">
      <el-button
        class="ms-button ms-button-primary-28"
        type="primary"
      >按钮</el-button>
      <el-button
        class="ms-button ms-button-primary-28"
        type="primary"
        disabled
      >按钮</el-button>
    </div>
    <div class="tip">次要按钮(高度28)</div>
    <div class="content">
      <el-button
        class="ms-button ms-button-secondary-28"
        type="primary"
      >按钮</el-button>
      <el-button
        class="ms-button ms-button-secondary-28"
        type="primary"
        disabled
      >按钮</el-button>

    </div>
    <div class="tip">文字图标按钮28</div>
    <div class="content">
      <el-button
        class="ms-button ms-button-text-icon-28"
        icon="el-icon-edit"
      >文字图标按钮28</el-button>
      <el-button
        class="ms-button ms-button-text-icon-28"
        icon="el-icon-edit"
        disabled
      >文字图标按钮28</el-button>
    </div>
    <div class="tip">图标按钮（28-20）</div>
    <div class="content">
      <el-button
        class="ms-button ms-button-icon-28"
        icon="el-icon-edit"
      ></el-button>
      <el-button
        class="ms-button ms-button-icon-28"
        icon="el-icon-edit"
        disabled
      ></el-button>

      <el-button
        class="ms-button ms-button-icon-20"
        icon="el-icon-edit"
      ></el-button>
      <el-button
        class="ms-button ms-button-icon-20"
        icon="el-icon-edit"
        disabled
      ></el-button>
    </div>
    <div class="tip">图形按钮20</div>
    <div class="content">
      <el-button
        class="ms-button ms-button-sign-20"
        icon="el-icon-delete"
      ></el-button>

    </div>
    <div class="tip">操作按钮32</div>
    <div class="content">
      <el-button class="ms-button ms-button-operation-32">
        <i
          class="ms-button-icon"
          :style="btnRefreshIconSvg"
        ></i>
        操作按钮32
      </el-button>
      <el-button
        class="ms-button ms-button-operation-32"
        disabled
      >
        <i
          class="ms-button-icon"
          :style="btnRefreshIconSvg"
        ></i>
        操作按钮32
      </el-button>

      <div class="tip">上下按钮32</div>
      <div class="content">
        <el-button class="ms-button ms-button-updown">
          <i
            class="ms-button-icon"
            :style="btnRefreshIconSvg"
          ></i>
          提交
        </el-button>
        <el-button
          class="ms-button ms-button-updown"
          disabled
        >
          <i
            class="ms-button-icon"
            :style="btnRefreshIconSvg"
          ></i>
          提交
        </el-button>

      </div>

      <div class="tip">操作分段按钮</div>
      <div class="content">
        <el-dropdown
          class="ms-button-operation-split-32"
          @command="click"
          @click="click(0)"
          split-button
          type="primary"
          trigger="click"
          placement="bottom"
        >
          <i
            class="ms-button-icon"
            :style="btnRefreshIconSvg"
          ></i>
          操作分段按钮32
          <el-dropdown-menu
            class="ms-button-operation-split-dropdown-32"
            style="min-width: 151px;"
            slot="dropdown"
          >
            <el-dropdown-item command="1">
              <span>
                <i
                  class="ms-button-icon"
                  :style="btnRefreshIconSvg"
                ></i>
                操作分段按钮32
              </span>
            </el-dropdown-item>
            <el-dropdown-item
              command="2"
              divided
            >
              <span>
                <i
                  class="ms-button-icon"
                  :style="btnRefreshIconSvg"
                ></i>
                操作分段按钮32
              </span>
            </el-dropdown-item>
            <el-dropdown-item
              command="3"
              divided
            >
              <span>
                <i
                  class="ms-button-icon"
                  :style="btnRefreshIconSvg"
                ></i>
                操作分段按钮32
              </span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // import引入的组件需要注入到对象中才能使用
  name: "ButtonIndex",
  components: {},
  data() {
    // 这里存放数据
    return {};
  },
  computed: {
    btnRefreshIconSvg() {
      return `background: url(${require(`@/assets/file.png`)}) center center/cover  no-repeat;`;
    },
  },
  watch: {},
  methods: {
    click() {},
  },
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
// @import url(); 引入公共css类
</style>