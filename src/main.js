import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui'; //引入element-ui
import 'element-ui/lib/theme-chalk/index.css'; //引入element-ui样式文件
import '@/assets/font/iconfont.css'; //从阿里云引入字体图标
import Router from './router/Index';

import ComponentUtil from '../package/index.js'; //引入组件库
import '../package/assets/css/base.less'; //引入组件样式文件

import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'; //引入第三方插件样式文件

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(ComponentUtil);

new Vue({
  render: h => h(App),
  router: Router,
}).$mount('#app');
