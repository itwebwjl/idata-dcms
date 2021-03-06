let serveManager =
{
  path: "/serve",
  component: resolve => require(['../../page/serve/index.vue'], resolve),
  meta: {
    title: '数据服务'
  },
  name: "serve",
  redirect: "/serve/serveManage",
  children: [
    {
      path: "/serve/serveManage",
      component: resolve => require(['../../page/serve/dataServe/serveManage.vue'], resolve),
      meta: {
        title: '服务管理',
      },
      name: "serveManage"
    },
    {
      path: "/serve/createDataServe",
      component: resolve => require(['../../page/serve/dataServe/createDataServe.vue'], resolve),
      meta: {
        title: '创建数据服务'
      },
      name: "createDataServe"
    },
    {
      path: "/serve/applyApprove",
      component: resolve => require(['../../page/serve/dataServe/applyApprove.vue'], resolve),
      meta: {
        title: '申请审批'
      },
      name: "applyApprove",
    },
    {
      path: "/serve/serveApprove",
      component: resolve => require(['../../page/serve/dataServe/serveApprove.vue'], resolve),
      meta: {
        title: '服务审批'
      },
      name: "serveApprove",
    },
    {
      path: "/serve/controlRecord",
      component: resolve => require(['../../page/serve/record/controlRecord.vue'], resolve),
      meta: {
        title: '监控日志'
      },
      name: "controlRecord",
    },

    {
      path: "/serve/roleManage",
      component: resolve => require(['../../page/serve/systemManage/roleManage.vue'], resolve),
      meta: {
        title: '角色管理'
      },
      name: "roleManage"
    },
    {
      path: "/serve/userManage",
      component: resolve => require(['../../page/serve/systemManage/userManage.vue'], resolve),
      meta: {
        title: '用户管理'
      },
      name: "userManage",
    },
    {
      path: "/serve/editRole",
      component: resolve => require(['../../page/serve/systemManage/editRole.vue'], resolve),
      meta: {
        title: '编辑角色'
      },
      name: "editRole",
    },
    {
      path: "/serve/appManage",
      component: resolve => require(['../../page/serve/systemManage/appManage.vue'], resolve),
      meta: {
        title: '应用管理'
      },
      name: "appManage",
    },
    {
      path: "/serve/handleRecord",
      component: resolve => require(['../../page/serve/systemManage/handleRecord.vue'], resolve),
      meta: {
        title: '操作日志'
      },
      name: "handleRecord",
    },
  ]


}

export default serveManager
