import Vue from 'vue'
import Router from 'vue-router'
import serveManager from "./modules/serveManager";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['../frame/navbar.vue'], resolve),
      redirect: "/index",
      meta: { title: "首页" },
      children: [
        {
          path: "/index",
          component: resolve => require(['../page/index/index.vue'], resolve),
        },
        {
          path: "/myServe",
          component: resolve => require(['../page/myServe/index.vue'], resolve),
          meta: {
            title: "我的服务"
          }
        },
        {
          path: "/serveDetail",
          component: resolve => require(['../page/myServe/serveDetail.vue'], resolve),
          meta: {
            title: "服务详情"
          }
        },
        serveManager,
      ],
    },
    {
      path: '/login',
      component: resolve => require(['../page/login.vue'], resolve),
      meta: { title: "登录" }
    },
  ]
})
