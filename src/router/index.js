import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(['../page/home.vue'], resolve),
      redirect: "/index",
      meta: {
        title: "首页"
      },
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
        {
          path: "/serve",
          component: resolve => require(['../page/serve/index.vue'], resolve),
          meta: {
            title: '服务管理'
          },
          name:"serve",
          redirect:"/serve/serveManage",
          children: [
            {
              path: "/serve/serveManage",
              component: resolve => require(['../page/serve/dataServe/serveManage.vue'], resolve),
              meta: {
                title: '服务管理'
              },
              name:"serveManage"
            },
            {
              path: "/serve/createDataServe",
              component: resolve => require(['../page/serve/dataServe/createDataServe.vue'], resolve),
              meta: {
                title: '创建数据服务'
              },
              name:"createDataServe"
            },
            {
              path: "/serve/roleManage",
              component: resolve => require(['../page/serve/systemManage/roleManage.vue'], resolve),
              meta: {
                title: '角色管理'
              },
              name:"roleManage"
            },
            {
              path: "/serve/userManage",
              component: resolve => require(['../page/serve/systemManage/userManage.vue'], resolve),
              meta: {
                title: '用户管理'
              },
              name:"userManage",
            },
            {
              path: "/serve/addRole",
              component: resolve => require(['../page/serve/systemManage/addRole.vue'], resolve),
              meta: {
                title: '新增角色'
              },
              name:"addRole",
            },
            {
              path: "/serve/appManage",
              component: resolve => require(['../page/serve/systemManage/appManage.vue'], resolve),
              meta: {
                title: '应用管理'
              },
              name:"appManage",
            },
            {
              path: "/serve/handleRecord",
              component: resolve => require(['../page/serve/systemManage/handleRecord.vue'], resolve),
              meta: {
                title: '操作日志'
              },
              name:"handleRecord",
            },
            {
              path: "/serve/appManage",
              component: resolve => require(['../page/serve/systemManage/appManage.vue'], resolve),
              meta: {
                title: '操作日志'
              },
              name:"appManage",
            },
            {
              path: "/serve/applyApprove",
              component: resolve => require(['../page/serve/dataServe/applyApprove.vue'], resolve),
              meta: {
                title: '申请审批'
              },
              name:"applyApprove",
            },
            {
              path: "/serve/serveApprove",
              component: resolve => require(['../page/serve/dataServe/serveApprove.vue'], resolve),
              meta: {
                title: '服务审批'
              },
              name:"serveApprove",
            },
            {
              path: "/serve/controlRecord",
              component: resolve => require(['../page/serve/record/controlRecord.vue'], resolve),
              meta: {
                title: '监控日志'
              },
              name:"controlRecord",
            },
          ]
        }
      ],
    },
    {
      path: '/login',
      component: resolve => require(['../page/login.vue'], resolve),
      meta: {
        title:"登录"
      }
    },
    {
      path: '/test',
      component: resolve => require(['../page/test.vue'], resolve),
      meta: {
        title:"登录"
      }
    }
  ]
})
