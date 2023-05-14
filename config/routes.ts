export default [
  {
    path: '/user',
    layout: false,
    routes: [{ path: '/user/login', name: '登录', component: './User/Login' }],
  },
  { path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome' },
  {
    path: '/admin',
    icon: 'crown',
    name: '管理',
    access: 'canAdmin',
    routes: [
      { path: '/admin', redirect: '/admin/sub-page' },
      { path: '/admin/sub-page', name: '二级管理', component: './Admin' },
    ],
  },
  { icon: 'table', name: '表单', path: '/list', component: './TableList' },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
