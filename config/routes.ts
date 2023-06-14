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
  { path: '/welcome', name: '欢迎', icon: 'icon-huanying1', component: './Welcome' },
  { path: '/add_chart', name: 'BI智能图表(同步)', icon: 'icon-tubiao1', component: './AddChart' },
  { path: '/add_chart_async', name: 'BI智能图表(异步)', icon: 'icon-tubiao1', component: './AsyncAddChart' },
  { path: '/my_chart', name: '图表管理', icon: 'icon-bingtutubiao', component: './MyChart' },
  {
    path: '/admin',
    icon: 'icon-guanliyuan',
    name: '管理',
    access: 'canAdmin',
    routes: [
      { path: '/admin', redirect: '/admin/sub-page' },
      { path: '/admin/index', name: '管理员首页', component: './Admin' },
      { path: '/admin/user_manage', name: '用户管理', component: './Admin/UserManage' },
      { path: '/admin/adduser', name: '新增用户', component: './Admin/AddUser' },
      { path: '/admin/chart_manage', name: '图表管理', component: './Admin/ChartManage' },
    ],
  },
  { icon: 'icon-yonghu', name: '用户信息', path: '/userinfo', component: './UserInfo/' },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
