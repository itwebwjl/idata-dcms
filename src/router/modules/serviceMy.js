export default [{
  path: '/service/my',
  name: 'service.my',
  component: resolve => require(['../../frame/navbar.vue'], resolve),
  children:[{
    path: '/service/my/index',
    name: 'service.my.index',
    component: resolve => require(['../../page/myServe/index.vue'], resolve)
  }]
}]
