import Vue from 'vue'
import Router from 'vue-router'
import serveManager from "./modules/serveManager";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['../frame/navbar.vue'], resolve),
      redirect: "/serveList",
      meta: { title: "navbar" },
      children: [
        {
          path: "/serveList",
          component: resolve => require(['../page/index/serveList.vue'], resolve),
          meta: {
            title: "服务列表"
          }
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
