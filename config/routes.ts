export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { path: '/user/login', name: '登录', component: './User/Login' },
      { path: '/user/register', name: '注册', component: './User/Register' },
      { component: './404' },
    ],
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
      { path: '/admin/usermanage', name: '用户管理', component: './Admin/UserManage' },
      { path: '/admin/adduser', name: '新增用户', component: './Admin/AddUser' },
    ],
  },
  { icon: 'smile', name: '用户信息', path: '/userinfo', component: './UserInfo/' },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
