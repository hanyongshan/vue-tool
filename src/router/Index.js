import Vue from 'vue';
import VueRouter from 'vue-router';

// 1. 注册 VueRouter 插件
Vue.use(VueRouter);

// 2. 定义路由组件（可以懒加载）
const HomeIndex = () => import('@/views/Home.vue');
const ButtonIndex = () => import('@/views/assembly/Button.vue');
const DatePick = () => import('@/views/assembly/DatePick.vue');
const InputIndex = () => import('@/views/assembly/Input.vue');
const SelectIndex = () => import('@/views/assembly/Select.vue');
const DragIndex = () => import('@/views/assembly/Drag.vue');
const ScrollbarIndex = () => import('@/views/assembly/Scrollbar.vue');

// 3. 定义路由规则
const routes = [
  {
    path: '/',
    name: 'HomeIndex',
    component: HomeIndex,
  },
  {
    path: '/button',
    name: 'HomeIndex',
    component: ButtonIndex,
  },
  {
    path: '/datepick',
    name: 'DatePick',
    component: DatePick,
  },
  {
    path: '/input',
    name: 'InputIndex',
    component: InputIndex,
  },
  {
    path: '/select',
    name: 'SelectIndex',
    component: SelectIndex,
  },
  {
    path: '/drag',
    name: 'DragIndex',
    component: DragIndex,
  },
  {
    path: '/scrollbar',
    name: 'ScrollbarIndex',
    component: ScrollbarIndex,
  },
];

// 4. 创建路由实例
const router = new VueRouter({
  mode: 'history', // 可选: 'hash'（默认）或 'history'（需服务器支持）
  base: process.env.BASE_URL,
  routes,
});

export default router;
