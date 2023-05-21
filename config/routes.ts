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
  { path: '/', redirect: '/add_chart' },
  { path: '/welcome', name: '欢迎', icon: 'icon-icon_huanyingmoshi', component: './Welcome' },
  { path: '/add_chart', name: 'BI图表分析', icon: 'icon-tubiao1', component: './AddChart' },
  {
    path: '/admin',
    icon: 'icon-guanliyuan',
    name: '管理',
    access: 'canAdmin',
    routes: [
      { path: '/admin', redirect: '/admin/sub-page' },
      { path: '/admin/index', name: '管理员首页', component: './Admin' },
      { path: '/admin/usermanage', name: '用户管理', component: './Admin/UserManage' },
      { path: '/admin/adduser', name: '新增用户', component: './Admin/AddUser' },
    ],
  },
  { icon: 'icon-yonghu', name: '用户信息', path: '/userinfo', component: './UserInfo/' },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
