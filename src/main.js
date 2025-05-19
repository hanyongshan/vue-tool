import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import ComponentUtil from "./components";

import './assets/css/base.less';


Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(ComponentUtil);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
