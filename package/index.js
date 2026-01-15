const componentsObj = {};
const files = require.context('./components', true, /\.vue$/);

//files.keys() === ['./button/MsButton.vue',...]
//files(file)---获取指定路径下的模块Module

files.keys().forEach(file => {
  const component = files(file).default;
  componentsObj[component.name] = component;
});

import MsValidate from './utils/validate.js';
import MsTool from './utils/tool.js';
import MsJsStore from './utils/jsstore.js';
import MsCookie from './utils/cookie.js';
import MsLocalStorage from './utils/locationstorage.js';

export { MsValidate, MsTool };

// 引入第三方工具插件(部分引入)，第三方插件样式不用再工具包中引入，直接在项目入口main.js中引入即可
import { RecycleScroller } from 'vue-virtual-scroller';

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (vue) {
  Object.keys(componentsObj).forEach(name => {
    vue.component(name, componentsObj[name]);
  });
  // 将第三方插件工具注册为全局组件
  vue.component('RecycleScroller', RecycleScroller);

  vue.prototype.$msValidate = MsValidate;
  vue.prototype.$msSystem = MsTool;
};

// 判断是否是直接引入文件,如果是，就不用调用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

// 导出的对象必须具有 install，才能被 Vue.use() 方法安装
export default {
  install,
};
